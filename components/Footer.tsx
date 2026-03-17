import Link from 'next/link'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="relative bg-tactical-black border-t-2 border-tactical-red py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-4xl text-white mb-4 tracking-wider">ALEX AGUILAR</h3>
            <p className="text-tactical-red font-heading text-sm tracking-widest uppercase mb-4">
              TACTICAL AESTHETICS
            </p>
            <p className="text-gray-400 leading-relaxed">
              Bridging bodybuilding and tactical fitness. Elite training for dads, tactical professionals, and special operations candidates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-tactical-red mb-6 tracking-widest">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors font-heading tracking-wide">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors font-heading tracking-wide">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-gray-400 hover:text-white transition-colors font-heading tracking-wide">
                  TRAINING
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors font-heading tracking-wide">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-heading text-xl text-tactical-red mb-6 tracking-widest">STAY CONNECTED</h4>
            <p className="text-gray-400 mb-4">
              Follow for training tips, program updates, and motivation.
            </p>
            <SocialLinks />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-tactical-red/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Alex Aguilar Training. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm font-heading tracking-widest">
              PROUDLY MADE IN THE USA 🇺🇸
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
