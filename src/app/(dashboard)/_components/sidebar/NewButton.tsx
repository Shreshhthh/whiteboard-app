import React from "react";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <button className="bg-white/25 h-full w-full rounded-md flex justify-center items-center opacity-60 hover:opacity-100 transition">
            <Plus />
          </button>
        </div>
      </DialogTrigger>

      <DialogContent>
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
