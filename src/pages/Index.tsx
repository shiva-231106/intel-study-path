import { useState } from "react";
import Dashboard from "@/components/Dashboard";
import Navigation from "@/components/Navigation";
import DocumentUpload from "@/components/DocumentUpload";
import Analytics from "@/components/Analytics";
import Assessments from "@/components/Assessments";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "documents":
      case "upload":
        return <DocumentUpload />;
      case "analytics":
        return <Analytics />;
      case "assessments":
        return <Assessments />;
      case "settings":
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Settings</h2>
            <p className="text-muted-foreground">Settings panel coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar Navigation */}
      <div className="w-64 flex-shrink-0">
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {activeSection === "dashboard" ? (
          renderContent()
        ) : (
          <div className="p-8">
            {renderContent()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
