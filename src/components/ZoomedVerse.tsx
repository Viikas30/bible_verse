import React, { useEffect } from 'react';
import { X, Copy, Share, Heart, ArrowLeft, ArrowRight } from 'lucide-react';
import { BibleVerse } from '../pages/Index';
import { useToast } from '../hooks/use-toast';

interface ZoomedVerseProps {
  verse: BibleVerse;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const ZoomedVerse: React.FC<ZoomedVerseProps> = ({ verse, onClose, onPrev, onNext }) => {
  const { toast } = useToast();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`"${verse.text}" - ${verse.reference}`);
      toast({
        title: "Copied to clipboard",
        description: "Verse has been copied to your clipboard",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: verse.reference,
          text: `"${verse.text}" - ${verse.reference}`,
        });
      } catch (err) {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  useEffect(() => {
  const handleKeys = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && onPrev) onPrev();
    if (e.key === 'ArrowRight' && onNext) onNext();
    if (e.key === 'Escape') onClose();
  };
  document.addEventListener('keydown', handleKeys);
  return () => document.removeEventListener('keydown', handleKeys);
}, [onPrev, onNext, onClose]);


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white/90 rounded-3xl shadow-2xl animate-scale-in flex flex-col items-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Previous Button */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full shadow-lg p-3 transition"
            aria-label="Previous Verse"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full shadow-lg p-3 transition"
            aria-label="Next Verse"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        )}

        {/* Content */}
        <div className="p-8 md:p-12 w-full flex flex-col items-center">
          {/* Reference header */}
          <div className="text-center mb-8">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold mb-4 shadow">
              {verse.reference}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {verse.book} Chapter {verse.chapter}
            </h2>
          </div>

          {/* Main verse text */}
          <div className="relative w-full">
            <div className="absolute -top-4 -left-4 text-8xl text-blue-100 font-serif select-none">"</div>
            <div className="absolute -bottom-8 -right-4 text-8xl text-blue-100 font-serif select-none">"</div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-800 text-center font-serif px-8 py-12 relative z-10 bg-white/70 rounded-2xl shadow">
              {verse.text}
            </blockquote>
          </div>

          {/* Citation */}
          <div className="text-center mt-8 mb-8">
            <cite className="text-xl font-medium text-gray-600 not-italic">
              — {verse.reference}
            </cite>
          </div>

          {/* Action buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Copy className="w-5 h-5" />
              Copy
            </button>
            
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Share className="w-5 h-5" />
              Share
            </button>
            
            <button className="flex items-center gap-2 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
              <Heart className="w-5 h-5" />
              Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};