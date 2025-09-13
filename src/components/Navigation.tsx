import { Button } from "@/components/ui/button";
import { BookOpen, BarChart3, Upload, Settings, Brain, Home } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "documents", label: "Documents", icon: BookOpen },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "assessments", label: "Assessments", icon: Brain },
    { id: "upload", label: "Upload", icon: Upload },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="bg-card border-r border-border shadow-soft">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-learning bg-clip-text text-transparent">
            LearnAI
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Adaptive Learning Platform</p>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start gap-3 h-12 ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-soft" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                onClick={() => onSectionChange(item.id)}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Button>
            );
          })}
        </div>

        {/* User Section */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-card-secondary">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-learning flex items-center justify-center">
              <span className="text-white text-sm font-semibold">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">John Doe</p>
              <p className="text-xs text-muted-foreground">Premium Member</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;