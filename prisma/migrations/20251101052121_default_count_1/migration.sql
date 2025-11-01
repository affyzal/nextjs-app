-- AlterTable
CREATE SEQUENCE resumedownload_id_seq;
ALTER TABLE "ResumeDownload" ALTER COLUMN "id" SET DEFAULT nextval('resumedownload_id_seq'),
ALTER COLUMN "count" SET DEFAULT 1;
ALTER SEQUENCE resumedownload_id_seq OWNED BY "ResumeDownload"."id";
