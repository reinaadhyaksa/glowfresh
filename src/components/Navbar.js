export function Navbar() {
    return `
        <header class="bg-white shadow-md fixed w-full z-50">
            <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#" class="text-2xl font-bold text-primary">GlowFresh</a>

                <nav class="hidden md:block">
                    <ul class="flex space-x-8">
                        <li><a href="#home"
                            class="text-gray-700 hover:text-primary font-medium transition-colors">Beranda</a></li>
                        <li><a href="#benefits"
                            class="text-gray-700 hover:text-primary font-medium transition-colors">Manfaat</a></li>
                        <li><a href="#testimonials"
                            class="text-gray-700 hover:text-primary font-medium transition-colors">Testimoni</a></li>
                        <li><a href="#contact"
                            class="text-gray-700 hover:text-primary font-medium transition-colors">Hubungi</a></li>
                    </ul>
                </nav>

                <div class="md:hidden">
                    <div id="hamburger" class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div id="mobileMenu" class="mobile-menu md:hidden">
                <ul class="text-center">
                    <li class="mb-6"><a href="#home"
                        class="text-2xl font-medium text-gray-800 hover:text-primary transition-colors">Beranda</a></li>
                    <li class="mb-6"><a href="#benefits"
                        class="text-2xl font-medium text-gray-800 hover:text-primary transition-colors">Manfaat</a></li>
                    <li class="mb-6"><a href="#testimonials"
                        class="text-2xl font-medium text-gray-800 hover:text-primary transition-colors">Testimoni</a>
                    </li>
                    <li><a href="#contact"
                        class="text-2xl font-medium text-gray-800 hover:text-primary transition-colors">Hubungi</a></li>
                </ul>
            </div>
        </header>
    `
}