"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { usePackageContext } from "../context/usePackageContext";
import { deletePackage } from "../actions";
import { useQueryClient } from "@tanstack/react-query";

export function DeletePackageModal({ page }: { page: number }) {
  const { selected, setSelected, setToggleDelete, toggleDelete } =
    usePackageContext();
  const queryClient = useQueryClient();

  return (
    <AlertDialog
      open={toggleDelete}
      onOpenChange={(e) => {
        setToggleDelete(false);
        setSelected(undefined);
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this package: {selected?.name}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              const res = await deletePackage({
                selectedID: selected?.id || "",
              });
              if (res) {
                queryClient.invalidateQueries({
                  queryKey: [`packages:${page}`],
                });
                setToggleDelete(false);
                setSelected(undefined);
              }
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
