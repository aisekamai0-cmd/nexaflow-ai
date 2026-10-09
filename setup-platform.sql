-- NexaFlow AI v2 additive backend scaffold
-- SAFE BY DESIGN: does not alter the existing dental "leads" table.
-- Run only when instructed during setup.

create extension if not exists pgcrypto;

create table if not exists public.sales_leads (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  name text not null,
  company text,
  email text,
  phone text,
  interest text,
  score integer check (score between 0 and 100),
  status text not null default 'New',
  preferred_meeting text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.recruitment_candidates (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  name text not null,
  email text,
  target_role text,
  score integer check (score between 0 and 100),
  status text not null default 'New',
  skills jsonb not null default '[]'::jsonb,
  resume_summary text,
  created_at timestamptz not null default now()
);

create table if not exists public.support_tickets (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  customer_name text,
  customer_email text,
  subject text not null,
  intent text,
  priority text not null default 'Medium',
  status text not null default 'Open',
  summary text,
  created_at timestamptz not null default now()
);

create table if not exists public.marketing_projects (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  project_name text not null,
  domain text,
  target_topic text,
  keywords jsonb not null default '[]'::jsonb,
  plan jsonb not null default '{}'::jsonb,
  status text not null default 'Draft',
  created_at timestamptz not null default now()
);

create table if not exists public.workflow_events (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  category text not null,
  agent text not null,
  entity_id text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.sales_leads enable row level security;
alter table public.recruitment_candidates enable row level security;
alter table public.support_tickets enable row level security;
alter table public.marketing_projects enable row level security;
alter table public.workflow_events enable row level security;

drop policy if exists "sales_leads_owner_all" on public.sales_leads;
create policy "sales_leads_owner_all" on public.sales_leads
for all to authenticated using (owner_id = auth.uid()) with check (owner_id = auth.uid());

drop policy if exists "recruitment_candidates_owner_all" on public.recruitment_candidates;
create policy "recruitment_candidates_owner_all" on public.recruitment_candidates
for all to authenticated using (owner_id = auth.uid()) with check (owner_id = auth.uid());

drop policy if exists "support_tickets_owner_all" on public.support_tickets;
create policy "support_tickets_owner_all" on public.support_tickets
for all to authenticated using (owner_id = auth.uid()) with check (owner_id = auth.uid());

drop policy if exists "marketing_projects_owner_all" on public.marketing_projects;
create policy "marketing_projects_owner_all" on public.marketing_projects
for all to authenticated using (owner_id = auth.uid()) with check (owner_id = auth.uid());

drop policy if exists "workflow_events_owner_all" on public.workflow_events;
create policy "workflow_events_owner_all" on public.workflow_events
for all to authenticated using (owner_id = auth.uid()) with check (owner_id = auth.uid());

create index if not exists sales_leads_owner_created_idx on public.sales_leads(owner_id, created_at desc);
create index if not exists recruitment_candidates_owner_created_idx on public.recruitment_candidates(owner_id, created_at desc);
create index if not exists support_tickets_owner_created_idx on public.support_tickets(owner_id, created_at desc);
create index if not exists marketing_projects_owner_created_idx on public.marketing_projects(owner_id, created_at desc);
create index if not exists workflow_events_owner_created_idx on public.workflow_events(owner_id, created_at desc);
