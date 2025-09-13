import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, TrendingUp, Upload, Target, Award } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const Dashboard = () => {
  // Mock data for demonstration
  const studyProgress = 68;
  const weeklyGoal = 75;
  const completedCourses = 12;
  const activeDocuments = 8;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-learning py-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Learning Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Adaptive Learning Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Transform your documents into personalized learning experiences with AI-powered assessments and intelligent study recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Upload className="mr-2 h-5 w-5" />
                Upload Documents
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                <Brain className="mr-2 h-5 w-5" />
                View Analytics
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-0 shadow-soft hover:shadow-medium transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Study Progress</CardTitle>
                <TrendingUp className="h-4 w-4 text-learning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{studyProgress}%</div>
                <Progress value={studyProgress} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weekly Goal</CardTitle>
                <Target className="h-4 w-4 text-achievement" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{weeklyGoal}%</div>
                <p className="text-xs text-muted-foreground">7% above target</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
                <Award className="h-4 w-4 text-analytics" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{completedCourses}</div>
                <p className="text-xs text-muted-foreground">+2 this week</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Documents</CardTitle>
                <BookOpen className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{activeDocuments}</div>
                <p className="text-xs text-muted-foreground">Ready for study</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Recent Learning Activity
                  </CardTitle>
                  <CardDescription>
                    Your latest study sessions and achievements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { subject: "Machine Learning Basics", progress: 85, type: "Assessment", status: "completed" },
                    { subject: "Data Structures", progress: 60, type: "Study Session", status: "active" },
                    { subject: "Python Programming", progress: 95, type: "Quiz", status: "completed" },
                    { subject: "Web Development", progress: 30, type: "Document Review", status: "active" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-card-secondary rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{activity.subject}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={activity.status === 'completed' ? 'default' : 'secondary'}>
                            {activity.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {activity.progress}% complete
                          </span>
                        </div>
                      </div>
                      <Progress value={activity.progress} className="w-20" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* AI Recommendations */}
            <div>
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-learning" />
                    AI Recommendations
                  </CardTitle>
                  <CardDescription>
                    Personalized study suggestions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Focus on Algorithms",
                      description: "Based on your recent performance, spend more time on sorting algorithms",
                      priority: "high"
                    },
                    {
                      title: "Review Statistics",
                      description: "Strengthen your statistics foundation before advanced topics",
                      priority: "medium"
                    },
                    {
                      title: "Practice Coding",
                      description: "Try coding exercises to reinforce theoretical knowledge",
                      priority: "low"
                    }
                  ].map((rec, index) => (
                    <div key={index} className="p-4 bg-card-secondary rounded-lg border-l-4 border-l-learning">
                      <h4 className="font-medium text-foreground mb-1">{rec.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                      <Badge variant={rec.priority === 'high' ? 'destructive' : rec.priority === 'medium' ? 'default' : 'secondary'}>
                        {rec.priority} priority
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;