import { Card, Testimonial } from "./ui";

export default function Content() {
    return `
    <section id="home" class="bg-secondary pt-24">
        <div class="container mx-auto px-4 hero-container flex flex-col justify-center">
            <div class="text-center max-w-3xl mx-auto">
                <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fadeIn">Segarkan Tubuh, Alami Tanpa
                    Bahan Kimia.</h1>
                <p class="text-lg md:text-xl text-gray-600 mb-8 animate-fadeIn">
                    Minuman herbal alami dari bahan-bahan organik pilihan untuk detoksifikasi tubuh dan meningkatkan
                    energi.
                </p>
                <a href="https://wa.me/6281212345678" class="btn animate-fadeIn"
                    aria-label="Pesan GlowFresh via WhatsApp">
                    Pesan Sekarang
                </a>
            </div>
            <div class="mt-12 animate-slideDown">
                <img src="https://images.pexels.com/photos/14151870/pexels-photo-14151870.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Botol Minuman Herbal GlowFresh"
                    class="mx-auto w-64 md:w-80 rounded-lg shadow-md" width="300" height="500">
            </div>
        </div>
    </section>

    <section id="benefits" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-primary text-center mb-12">Manfaat GlowFresh</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                ${
                    Card(
                        "fa-leaf",
                        "Detoksifikasi Tubuh",
                        "Membantu mengeluarkan racun dari dalam tubuh secara alami dengan kandungan herbal pilihan."
                    )
                }
                ${
                    Card(
                        "fa-bolt",
                        "Meningkatkan Energi",
                        "Memberikan energi alami tanpa efek samping berkat komposisi herbal berkualitas."
                    )
                }
                ${
                    Card(
                        "fa-heart",
                        "Baik untuk Pencernaan",
                        "Melancarkan sistem pencernaan secara alami dan menjaga kesehatan usus."
                    )
                }
                ${
                    Card(
                        "fa-ban",
                        "Tanpa Bahan Kimia",
                        "100% alami tanpa pengawet, pewarna buatan, atau bahan kimia berbahaya."
                    )
                }
            </div>
        </div>
    </section>

    <section id="testimonials" class="py-16 bg-secondary">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-primary text-center mb-12">Apa Kata Mereka?</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${
                    Testimonial(
                        "Setelah minum GlowFresh rutin selama 2 minggu, badan terasa lebih segar dan pencernaan lebih lancar!", 
                        "Ayu, Jakarta"
                    )
                }
                ${
                    Testimonial(
                        "Suka banget karena rasanya enak dan sehat. Tidak seperti minuman herbal lainnya yang pahit.",
                        "Dedi, Bandung"
                    )
                }
            </div>
        </div>
    </section>

    <section id="contact" class="py-20 bg-primary text-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-6">Ingin hidup lebih sehat mulai hari ini?</h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto">Dapatkan GlowFresh sekarang dan rasakan manfaatnya untuk tubuh
                Anda!</p>
            <a href="https://wa.me/6281212345678" class="btn bg-white text-primary hover:bg-gray-100"
                aria-label="Hubungi GlowFresh via WhatsApp">
                <i class="fab fa-whatsapp mr-2"></i> Hubungi Kami via WhatsApp
            </a>
        </div>
    </section>
    `
}