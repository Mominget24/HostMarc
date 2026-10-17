import React, { useState } from 'react';
import { PageId } from '../../types';
import { BLOG_POSTS } from '../../data/blogData';
import { Clock, Zap } from 'lucide-react';

interface TutorialsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

export const TutorialsPage: React.FC<TutorialsPageProps> = ({ onNavigate, onOpenModal }) => {
  const [selectedPostId, setSelectedPostId] = useState<string>(BLOG_POSTS[0].id);

  const activePost =
    BLOG_POSTS.find((p) => p.id === selectedPostId) || BLOG_POSTS[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445]">
          KNOWLEDGE BASE &amp; TUTORIALS
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#153E43] tracking-tight">
          Server Optimization &amp; Engineering Guides
        </h1>
        <p className="text-[#153E43]/80 text-sm sm:text-base leading-relaxed">
          Real architectural setups tested on production WordPress and client platforms by Farhan Momen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Post Directory */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#153E43]/60 px-1">
            Articles &amp; Benchmarks
          </h3>
          <div className="space-y-2">
            {BLOG_POSTS.map((post) => {
              const isActive = post.id === activePost.id;
              return (
                <button
                  key={post.id}
                  onClick={() => setSelectedPostId(post.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#153E43] text-[#153E43] shadow-sm ring-1 ring-[#153E43]/20'
                      : 'bg-white/60 border-[#E2DDD2] text-[#153E43]/70 hover:text-[#153E43] hover:border-[#153E43]/30'
                  }`}
                >
                  <div className="text-[11px] text-[#C86445] font-bold mb-1 font-mono">
                    {post.category}
                  </div>
                  <h4 className="text-sm font-bold line-clamp-2 leading-snug">
                    {post.title}
                  </h4>
                  <div className="text-[10px] text-[#153E43]/60 mt-2 flex items-center gap-2 font-mono">
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-white border border-[#E2DDD2] rounded-xl p-5 mt-6 space-y-3 shadow-xs">
            <h4 className="text-xs font-bold text-[#153E43] uppercase tracking-wider font-mono">
              Need Custom Migration Help?
            </h4>
            <p className="text-xs text-[#153E43]/75 leading-relaxed">
              If your database is over 2 GB or you run a complex multi-vendor WooCommerce store, submit a consultation request.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-2 px-3 text-xs font-semibold text-[#153E43] border border-[#153E43]/30 hover:border-[#153E43] hover:bg-[#153E43] hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              Contact Lab Engineers
            </button>
          </div>
        </div>

        {/* Right Column: Full Active Article Content */}
        <article className="lg:col-span-8 bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
          <div className="space-y-3 border-b border-[#E2DDD2] pb-6">
            <div className="flex items-center gap-3 text-xs text-[#C86445] font-bold">
              <span>{activePost.category}</span>
              <span className="text-[#153E43]/30">·</span>
              <span className="flex items-center gap-1 text-[#153E43]/60 font-mono">
                <Clock className="w-3.5 h-3.5" />
                {activePost.readTime}
              </span>
              <span className="text-[#153E43]/30">·</span>
              <span className="text-[#153E43]/60 font-mono">{activePost.date}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153E43] leading-tight">
              {activePost.title}
            </h2>

            <div className="flex items-center gap-2 text-xs text-[#153E43]/70 pt-1">
              <span className="w-6 h-6 rounded-full bg-[#153E43] flex items-center justify-center text-white text-[10px] font-bold">
                FM
              </span>
              <span>Written by <strong>{activePost.author.name}</strong>, {activePost.author.role}</span>
            </div>
          </div>

          {/* Article Excerpt Callout */}
          <div className="bg-[#F8F5EE] rounded-xl p-5 border border-[#E2DDD2] text-sm text-[#153E43]/90 italic font-serif">
            "{activePost.excerpt}"
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#153E43]/85 leading-relaxed">
            {activePost.content.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>

          {/* Bottom Action inside post */}
          <div className="bg-[#153E43] text-white rounded-xl p-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold">Deploy LiteSpeed on Hostinger Today</h4>
              <p className="text-xs text-white/75">Save 78% + 3 Months Free with promo code HOSTMARC</p>
            </div>
            <button
              onClick={onOpenModal}
              className="px-4 py-2 text-xs font-bold text-white bg-[#C86445] hover:bg-[#B05337] rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Claim Deal</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
