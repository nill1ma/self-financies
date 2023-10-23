-- CreateTable
CREATE TABLE "expenses" (
    "id" TEXT NOT NULL,
    "destine" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "payed_value" INTEGER NOT NULL,
    "pay_day" TIMESTAMP(3) NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "expenses_pkey" PRIMARY KEY ("id")
);
