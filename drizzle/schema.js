import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const profiles = pgTable('profiles', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  bio: text('bio'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const likes = pgTable('likes', {
  id: serial('id').primaryKey(),
  profileId: serial('profile_id').references(() => profiles.id),
  liked: boolean('liked').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});