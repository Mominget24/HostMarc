import React, { useState } from 'react';
import { PageId } from '../../types';
import { MIGRATION_STEPS } from '../../data/migrationData';
import {
  CheckCircle2,
  Clock,
  Lightbulb,
  ShieldCheck,
  AlertTriangle,
  Zap
} from 'lucide-react';

interface MigrationGuidePageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

export const MigrationGuidePage: React.FC<MigrationGuidePageProps> = ({
  onNavigate,
  onOpenModal,
}) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  const toggleStep = (id: number) => {
    if (completedSteps.includes(id)) {
      setCompletedSteps(completedSteps.filter((stepId) => stepId !== id));
    } else {
      setCompletedSteps([...completedSteps, id]);
    }
  };

  const progressPercent = Math.round((completedSteps.length / MIGRATION_STEPS.length) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-[#E2DDD2] pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#153E43]/10 border border-[#153E43]/20 text-[#153E43] text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Engineer Standard Operating Procedure (SOP)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#153E43] tracking-tight">
          The Zero-Downtime Hostinger Migration Playbook
        </h1>
        <p className="text-[#153E43]/80 text-base sm:text-lg leading-relaxed max-w-3xl">
          Follow our 6-step checklist to transfer any WordPress or cPanel site to Hostinger without losing order transactions, dropping email traffic, or showing error pages to visitors.
        </p>

        {/* Interactive Progress Bar */}
        <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 mt-6 space-y-3 shadow-sm">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-[#153E43]">Migration Checklist Progress</span>
            <span className="font-mono font-bold text-[#C86445]">{progressPercent}% Completed</span>
          </div>
          <div className="w-full h-3 bg-[#F3EFE6] rounded-full overflow-hidden border border-[#E2DDD2] p-0.5">
            <div
              className="h-full bg-[#153E43] rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-[#153E43]/70 pt-1">
            <span>{completedSteps.length} of {MIGRATION_STEPS.length} stages checked off</span>
            {completedSteps.length > 0 && (
              <button
                onClick={() => setCompletedSteps([])}
                className="hover:text-[#153E43] transition-colors cursor-pointer text-[11px] underline"
              >
                Reset Progress
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 6 Steps Interactive Accordion/Cards */}
      <div className="space-y-4">
        {MIGRATION_STEPS.map((step) => {
          const isDone = completedSteps.includes(step.id);
          const isExpanded = expandedStep === step.id;

          return (
            <div
              key={step.id}
              className={`border rounded-2xl transition-all overflow-hidden ${
                isDone
                  ? 'bg-white/60 border-[#E2DDD2]'
                  : isExpanded
                  ? 'bg-white border-[#153E43] shadow-md'
                  : 'bg-white border-[#E2DDD2] hover:border-[#153E43]/40'
              }`}
            >
              {/* Step Header */}
              <div
                onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                className="p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex items-start sm:items-center gap-4">
                  {/* Checkbox */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStep(step.id);
                    }}
                    className={`mt-0.5 sm:mt-0 w-6 h-6 rounded-lg flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                      isDone
                        ? 'bg-[#153E43] text-white shadow-sm'
                        : 'border-2 border-[#D8D2C5] hover:border-[#153E43] text-transparent'
                    }`}
                    aria-label={`Mark step ${step.id} as complete`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono font-bold text-[#C86445] uppercase tracking-wider">
                        Stage 0{step.id}
                      </span>
                      <span className="text-[#153E43]/30">·</span>
                      <span className="text-xs text-[#153E43]/70 flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </span>
                    </div>
                    <h3
                      className={`text-lg sm:text-xl font-bold mt-1 transition-colors ${
                        isDone ? 'line-through text-[#153E43]/40' : 'text-[#153E43]'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>

                <span className="text-xs text-[#153E43] font-semibold hidden sm:block shrink-0">
                  {isExpanded ? 'Collapse' : 'Details'}
                </span>
              </div>

              {/* Step Details Body */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-[#E2DDD2] space-y-5 animate-in fade-in duration-150">
                  <p className="text-sm text-[#153E43]/85 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold font-mono text-[#153E43] uppercase tracking-wider">
                      Execution Steps:
                    </h4>
                    <ol className="space-y-2 text-sm text-[#153E43]/80 list-decimal list-inside pl-1">
                      {step.instructions.map((inst, iIdx) => (
                        <li key={iIdx} className="leading-relaxed">
                          {inst}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Pro Tip Callout */}
                  <div className="bg-[#F8F5EE] border border-[#E2DDD2] rounded-xl p-4 flex items-start gap-3 text-xs text-[#153E43]">
                    <Lightbulb className="w-4 h-4 text-[#C86445] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#C86445]">Engineer Pro Tip:</strong> {step.proTip}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Emergency Rollback Plan */}
      <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
        <div className="flex items-center gap-2.5 text-[#C86445] font-bold text-lg">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <h3>Emergency Rollback Plan (Zero Risk)</h3>
        </div>
        <p className="text-[#153E43]/80 text-sm leading-relaxed">
          Because your old hosting account remains completely untouched and live during the process, your rollback strategy is 100% painless. If your test preview in Step 3 uncovers any plugin compatibility issue, simply do not proceed to Step 5. No visitor traffic is ever disturbed.
        </p>
      </div>

      {/* Want Hostinger Staff to do it? */}
      <div className="bg-[#153E43] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-bold">
            Prefer Hostinger’s Migration Engineers to Do It For You?
          </h3>
          <p className="text-sm text-white/80 max-w-xl">
            Hostinger provides 100% free automated site migrations with all plans. Just submit your current cPanel or WordPress login details in hPanel.
          </p>
        </div>
        <button
          onClick={onOpenModal}
          className="px-6 py-3 text-xs font-bold text-white bg-[#C86445] hover:bg-[#B05337] rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
        >
          <Zap className="w-4 h-4 text-amber-300" />
          <span>Get Free Migration + 78% Deal</span>
        </button>
      </div>
    </div>
  );
};
