-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "internal_team";

-- CreateTable
CREATE TABLE "internal_team"."auth_details" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auth_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "internal_team"."user_details" (
    "id" SERIAL NOT NULL,
    "auth_id" INTEGER NOT NULL,
    "full_name" TEXT NOT NULL,
    "phone" TEXT,
    "profile_image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "internal_team"."master_role_details" (
    "id" SERIAL NOT NULL,
    "role_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "master_role_details_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "auth_details_email_key" ON "internal_team"."auth_details"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_details_auth_id_key" ON "internal_team"."user_details"("auth_id");

-- CreateIndex
CREATE UNIQUE INDEX "master_role_details_role_name_key" ON "internal_team"."master_role_details"("role_name");

-- AddForeignKey
ALTER TABLE "internal_team"."auth_details" ADD CONSTRAINT "auth_details_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "internal_team"."master_role_details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internal_team"."user_details" ADD CONSTRAINT "user_details_auth_id_fkey" FOREIGN KEY ("auth_id") REFERENCES "internal_team"."auth_details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
