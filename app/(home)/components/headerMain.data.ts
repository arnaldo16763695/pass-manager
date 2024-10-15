import { Folder, KeyRound } from "lucide-react";
import { DataHeaderMainItemProps } from "./headerMain.type";

export const dataHeaderMain: DataHeaderMainItemProps[] = [
    {
        icon: KeyRound,
        text: 'Elemento',
        typeElement: 'password'
    },
    {
        icon: Folder,
        text: 'Carpeta',
        typeElement: 'folder'
    },
]