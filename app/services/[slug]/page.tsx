import { servicesData } from '../../../data/services';
import { notFound } from 'next/navigation';
import ServiceClient from './ServiceClient';

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        return notFound();
    }

    return <ServiceClient service={service} />;
}
