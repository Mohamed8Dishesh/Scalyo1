'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/96560905777"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 group"
            aria-label="Contact via WhatsApp"
        >
            <div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300">
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-50 duration-1000" />

                {/* Official WhatsApp SVG Logo */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-8 h-8">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.584c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112-.15.224-.579.73-.71.88-.131.15-.262.169-.486.056-.224-.113-.945-.349-1.801-1.113-.667-.595-1.117-1.329-1.248-1.554-.131-.225-.014-.347.099-.458.101-.1.224-.261.336-.393.112-.131.149-.224.224-.374.075-.149.038-.281-.019-.393-.056-.113-.504-1.214-.69-1.663-.181-.435-.366-.377-.504-.383-.131-.006-.281-.006-.431-.006-.15 0-.393.056-.6.281-.206.225-.787.769-.787 1.876 0 1.106.805 2.175.918 2.325.113.15 1.584 2.418 3.832 3.387 1.336.576 1.859.619 2.536.519.743-.109 1.327-.543 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.432-.263" />
                </svg>
            </div>
        </a>
    );
}
