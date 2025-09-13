import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Clock, CheckCircle, PlayCircle, BarChart3, BookOpen } from "lucide-react";

const Assessments = () => {
  const [activeTab, setActiveTab] = useState("available");

  // Mock assessment data
  const availableAssessments = [
    {
      id: 1,
      title: "Machine Learning Fundamentals Quiz",
      document: "ML_Fundamentals.pdf",
      questions: 15,
      estimatedTime: "12 min",
      difficulty: "Intermediate",
      topics: ["Supervised Learning", "Neural Networks", "Regression"]
    },
    {
      id: 2,
      title: "Python Data Structures Test",
      document: "Python_Guide.pdf",
      questions: 20,
      estimatedTime: "18 min",
      difficulty: "Beginner",
      topics: ["Lists", "Dictionaries", "Sets", "Tuples"]
    },
    {
      id: 3,
      title: "Algorithm Complexity Assessment",
      document: "Algorithms_Handbook.pdf",
      questions: 12,
      estimatedTime: "15 min",
      difficulty: "Advanced",
      topics: ["Big O", "Time Complexity", "Space Complexity"]
    }
  ];

  const completedAssessments = [
    {
      id: 4,
      title: "Web Development Basics",
      score: 92,
      totalQuestions: 18,
      correctAnswers: 17,
      completedDate: "2024-01-15",
      timeSpent: "14 min",
      performance: "excellent"
    },
    {
      id: 5,
      title: "JavaScript Fundamentals",
      score: 78,
      totalQuestions: 25,
      correctAnswers: 20,
      completedDate: "2024-01-14",
      timeSpent: "22 min",
      performance: "good"
    },
    {
      id: 6,
      title: "Database Design Principles",
      score: 85,
      totalQuestions: 15,
      correctAnswers: 13,
      completedDate: "2024-01-13",
      timeSpent: "16 min",
      performance: "good"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-learning text-learning-foreground';
      case 'intermediate': return 'bg-analytics text-analytics-foreground';
      case 'advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'excellent': return 'text-learning';
      case 'good': return 'text-analytics';
      case 'needs improvement': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      {/* Assessment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-soft bg-gradient-to-br from-learning/5 to-achievement/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Available</p>
                <p className="text-2xl font-bold text-foreground">{availableAssessments.length}</p>
              </div>
              <Brain className="h-8 w-8 text-learning" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-soft bg-gradient-to-br from-analytics/5 to-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-foreground">{completedAssessments.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-analytics" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-soft bg-gradient-to-br from-achievement/5 to-learning/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Score</p>
                <p className="text-2xl font-bold text-foreground">85%</p>
              </div>
              <BarChart3 className="h-8 w-8 text-achievement" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-border">
        <Button
          variant={activeTab === "available" ? "default" : "ghost"}
          className="rounded-b-none"
          onClick={() => setActiveTab("available")}
        >
          Available Assessments
        </Button>
        <Button
          variant={activeTab === "completed" ? "default" : "ghost"}
          className="rounded-b-none"
          onClick={() => setActiveTab("completed")}
        >
          Completed Assessments
        </Button>
      </div>

      {/* Available Assessments */}
      {activeTab === "available" && (
        <div className="space-y-4">
          {availableAssessments.map((assessment) => (
            <Card key={assessment.id} className="border-0 shadow-soft hover:shadow-medium transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Brain className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">{assessment.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{assessment.document}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{assessment.estimatedTime}</span>
                      </div>
                      <span>{assessment.questions} questions</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Badge className={getDifficultyColor(assessment.difficulty)}>
                        {assessment.difficulty}
                      </Badge>
                      {assessment.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="ml-4">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Start Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Completed Assessments */}
      {activeTab === "completed" && (
        <div className="space-y-4">
          {completedAssessments.map((assessment) => (
            <Card key={assessment.id} className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="h-5 w-5 text-learning" />
                      <h3 className="text-lg font-semibold text-foreground">{assessment.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
                      <span>Completed {assessment.completedDate}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{assessment.timeSpent}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-1 max-w-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Score: {assessment.score}%</span>
                          <span className="text-sm text-muted-foreground">
                            {assessment.correctAnswers}/{assessment.totalQuestions}
                          </span>
                        </div>
                        <Progress value={assessment.score} />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${getPerformanceColor(assessment.performance)} border-current`}
                      >
                        {assessment.performance}
                      </Badge>
                    </div>
                  </div>

                  <Button variant="outline">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Assessments;