import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { RegisterServiceDialogForm } from './register-service-dialog-form';

/**
 * サービス登録ダイアログコンポーネント
 */
export const RegisterServiceDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <Button size="lg" className="flex ml-auto">
                        サービスの登録
                    </Button>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>サービスを登録する</DialogTitle>
                    <DialogDescription>
                        サービスを登録するには、以下の情報を入力してください。
                    </DialogDescription>
                </DialogHeader>
                <RegisterServiceDialogForm />
            </DialogContent>
        </Dialog>
    );
};
