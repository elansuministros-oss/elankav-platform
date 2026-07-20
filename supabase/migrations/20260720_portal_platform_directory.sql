create extension if not exists pgcrypto;

create table if not exists public.elankav_admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.elankav_admin_users enable row level security;

create or replace function public.is_elankav_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.elankav_admin_users
    where user_id = auth.uid()
  );
$$;

revoke all on function public.is_elankav_admin() from public;
grant execute on function public.is_elankav_admin() to anon, authenticated;

create table if not exists public.elankav_platforms (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null default '',
  route_url text not null default '',
  logo_url text not null default '',
  active boolean not null default false,
  sort_order integer not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.elankav_platforms enable row level security;

drop policy if exists "Public read active platforms" on public.elankav_platforms;
create policy "Public read active platforms"
on public.elankav_platforms
for select
to anon
using (active = true);

drop policy if exists "Admins read all platforms" on public.elankav_platforms;
create policy "Admins read all platforms"
on public.elankav_platforms
for select
to authenticated
using (public.is_elankav_admin());

drop policy if exists "Admins insert platforms" on public.elankav_platforms;
create policy "Admins insert platforms"
on public.elankav_platforms
for insert
to authenticated
with check (public.is_elankav_admin());

drop policy if exists "Admins update platforms" on public.elankav_platforms;
create policy "Admins update platforms"
on public.elankav_platforms
for update
to authenticated
using (public.is_elankav_admin())
with check (public.is_elankav_admin());

drop policy if exists "Admins delete platforms" on public.elankav_platforms;
create policy "Admins delete platforms"
on public.elankav_platforms
for delete
to authenticated
using (public.is_elankav_admin());

insert into public.elankav_platforms (slug, name, description, route_url, active, sort_order)
values
  ('elanvisual', 'ELANVISUAL', 'Comunicación visual, rotulación, impresión, fachadas, acrílicos, PVC y soluciones de marca.', 'https://visual.elankav.com/', true, 10),
  ('elanpet', 'ELANPET', 'Productos, servicios y soluciones especializadas para mascotas y aliados veterinarios.', 'https://pet.elankav.com/', true, 20),
  ('elancenter', 'ELANCENTER', 'Centro de soluciones tecnológicas, formación y servicios digitales.', '', false, 30),
  ('elanhome', 'ELANHOME', 'Soluciones para hogar, mobiliario, decoración e interiores.', '', false, 40),
  ('kavtore', 'KAVTORÉ', 'Inteligencia artificial, automatización y operación inteligente.', '', false, 50)
on conflict (slug) do nothing;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'elankav-platform-logos',
  'elankav-platform-logos',
  true,
  3145728,
  array['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Admins upload platform logos" on storage.objects;
create policy "Admins upload platform logos"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'elankav-platform-logos' and public.is_elankav_admin());

drop policy if exists "Admins update platform logos" on storage.objects;
create policy "Admins update platform logos"
on storage.objects
for update
to authenticated
using (bucket_id = 'elankav-platform-logos' and public.is_elankav_admin())
with check (bucket_id = 'elankav-platform-logos' and public.is_elankav_admin());

drop policy if exists "Admins delete platform logos" on storage.objects;
create policy "Admins delete platform logos"
on storage.objects
for delete
to authenticated
using (bucket_id = 'elankav-platform-logos' and public.is_elankav_admin());
