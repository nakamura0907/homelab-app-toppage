'use server';

import { serviceClientFactory } from '@/entities/service';
import { revalidatePath } from 'next/cache';

/**
 * サービスを登録するServer Action
 */
export async function registerService(formData: FormData) {
    const client = serviceClientFactory();

    const title = formData.get('title') as string;
    const address = formData.get('address') as string;

    await client.registerService({ title, address });

    // ページを再検証
    revalidatePath('/');
}
