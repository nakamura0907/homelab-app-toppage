'use server';

import { serviceClientFactory } from '@/entities/service';
import { Result } from '@/shared';
import { revalidatePath } from 'next/cache';

/**
 * サービスを登録するServer Action
 */
export async function registerService(formData: FormData) {
    try {
        const client = serviceClientFactory();

        const title = formData.get('title') as string;
        const address = formData.get('address') as string;

        await client.registerService({ title, address });

        // ページを再検証
        revalidatePath('/');

        return Result.ok({});
    } catch {
        const err = new Error('サービスの登録に失敗しました');
        return Result.err(err);
    }
}
