'use client';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useForm, z, zodResolver } from '@/shared';

/**
 * サービス登録ダイアログのフォームスキーマ
 */
const formSchema = z.object({
    title: z.string().min(1, 'タイトルは必須です'),
    address: z.string().url('URL形式で入力してください'),
});

type FormValues = z.infer<typeof formSchema>;

/**
 * サービス登録ダイアログのフォームコンポーネント
 */
export const RegisterServiceDialogForm = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            address: '',
        },
    });

    /**
     * フォームのサブミット時に発火
     *
     * 新規にサービスを登録する
     */
    const onSubmit = (values: FormValues) => {
        console.log(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-4 py-4">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>タイトル</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Proxmox VE"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* タイトルの入力フィールド */}
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>URL</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="https://proxmox.example.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* URLの入力フィールド */}
                </div>
                <DialogFooter>
                    <Button type="submit">登録する</Button>
                </DialogFooter>
            </form>
        </Form>
    );
};
