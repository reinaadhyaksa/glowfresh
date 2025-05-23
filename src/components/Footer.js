export default function Footer() {
    return `
    <footer class="bg-gray-900 text-white pt-12 pb-6">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 class="text-2xl font-bold text-white mb-4">GlowFresh</h3>
                    <p class="text-gray-400">Minuman herbal alami untuk hidup lebih sehat dan segar setiap hari.</p>
                </div>
                <div>
                    <h4 class="text-xl font-bold mb-4">Tautan Cepat</h4>
                    <ul class="space-y-2">
                        <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">Beranda</a></li>
                        <li><a href="#benefits" class="text-gray-400 hover:text-white transition-colors">Manfaat</a>
                        </li>
                        <li><a href="#testimonials"
                                class="text-gray-400 hover:text-white transition-colors">Testimoni</a></li>
                        <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">Hubungi Kami</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-xl font-bold mb-4">Kontak Kami</h4>
                    <div class="space-y-2">
                        <p class="flex items-center text-gray-400">
                            <i class="fas fa-envelope mr-3 text-accent"></i> glowfresh@email.com
                        </p>
                        <p class="flex items-center text-gray-400">
                            <i class="fas fa-phone-alt mr-3 text-accent"></i> 0812-1234-5678
                        </p>
                        <div class="flex space-x-4 mt-4">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors"
                                aria-label="Facebook GlowFresh">
                                <i class="fab fa-facebook-f text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors"
                                aria-label="Instagram GlowFresh">
                                <i class="fab fa-instagram text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors"
                                aria-label="WhatsApp GlowFresh">
                                <i class="fab fa-whatsapp text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p>&copy; <span id="year"></span> GlowFresh. Semua hak dilindungi.</p>
            </div>
        </div>
    </footer>
    `
}