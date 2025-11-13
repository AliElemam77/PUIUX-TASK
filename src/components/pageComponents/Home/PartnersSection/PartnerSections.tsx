import SectionHeader from "@/components/common/SectionHeader/SectionHeader"
import Image from "next/image"

export default function PartnerSections() {
    const partners = [
        { name: 'Partner 1', logoUrl: '/assets/OurPartners/image1.svg' },
        { name: 'Partner 2', logoUrl: '/assets/OurPartners/image2.svg' },
        { name: 'Partner 3', logoUrl: '/assets/OurPartners/image3.svg' },
        { name: 'Partner 4', logoUrl: '/assets/OurPartners/image4.svg' },
        { name: 'Partner 5', logoUrl: '/assets/OurPartners/image5.svg' },
        { name: 'Partner 6', logoUrl: '/assets/OurPartners/image6.svg' },
    ]
    return (
        <div className="relative  overflow-hidden container bg-white w-full flex flex-col justify-center items-center py-16 lg:py-24">
            <div className="absolute top-0 left-0 scale-105 opacity-5">
                <div className="relative w-20 h-20 lg:w-60 lg:h-60">
                    <Image src="/assets/icons/HeaderShape.svg" alt="divider" fill className="mb-4 object-contain" />
                </div>
            </div>
            <div>
                <SectionHeader text="شركاؤنا" color="text-primary" />
            </div>
            <div className="flex gap-8 mt-10 flex-wrap items-center justify-center">
                {partners.map((partner, index) => (
                    <div key={index} >
                        <Image src={partner.logoUrl} alt={partner.name} width={150} height={60} className="max-h-16 object-contain" />
                    </div>
                ))}
            </div>
        </div>
    )
}
