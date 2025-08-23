import { Badge } from "@/components/badge";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/dialog";

interface EventProps {
    id: number;
    title: string;
    description: string;
    date: string;
}

export default function Event({ id, title, description, date }: EventProps) {
    const eventDate = new Date(date);
    const yearsAgo = new Date().getFullYear() - eventDate.getFullYear();

    return (
        <Dialog key={id}>
            <DialogTrigger className="mr-1 mb-1">
                <Badge className="cursor-pointer">{title}</Badge>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogTitle className="text-md opacity-50">
                        {yearsAgo} years ago
                    </DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
