import {
  Brain, MessageSquare, Settings, Zap, Rocket,
  UserCircle, Shield, HeartHandshake, TrendingUp,
  Microscope, Globe, XCircle, FileText, Building2, CheckSquare, ShieldCheck,
  Users, Heart, BookOpen, Scale, Sparkles, CreditCard,
  type LucideIcon,
} from "lucide-react";

export const CARD_ICONS: Record<string, LucideIcon> = {
  // Liderança
  "lid-01": Brain,
  "lid-02": MessageSquare,
  "lid-03": Settings,
  "lid-04": Zap,
  "lid-05": Rocket,
  // Colaboradores
  "col-01": UserCircle,
  "col-02": Shield,
  "col-03": HeartHandshake,
  "col-04": TrendingUp,
  // Conhecimento
  "con-01": Microscope,
  "con-02": Globe,
  "con-03": Brain,
  "con-04": XCircle,
  "con-05": Sparkles,
  "con-06": CreditCard,
  // Legislação
  "leg-01": FileText,
  "leg-02": Building2,
  "leg-03": CheckSquare,
  "leg-04": ShieldCheck,
  "leg-05": CreditCard,
};

export const PILLAR_ICONS: Record<string, LucideIcon> = {
  lideranca: Users,
  colaboradores: Heart,
  conhecimento: BookOpen,
  legislacao: Scale,
};
