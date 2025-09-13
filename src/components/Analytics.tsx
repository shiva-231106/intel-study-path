import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Clock, Target, Award, Brain, BookOpen } from "lucide-react";

const Analytics = () => {
  // Mock analytics data
  const weeklyStats = {
    studyTime: 12.5,
    documentsReviewed: 8,
    assessmentsPassed: 15,
    averageScore: 87,
    streak: 7
  };

  const subjectProgress = [
    { subject: "Machine Learning", progress: 85, timeSpent: "8.2h", lastStudied: "Today" },
    { subject: "Data Structures", progress: 72, timeSpent: "6.1h", lastStudied: "Yesterday" },
    { subject: "Python Programming", progress: 94, timeSpent: "12.3h", lastStudied: "2 days ago" },
    { subject: "Web Development", progress: 45, timeSpent: "3.8h", lastStudied: "3 days ago" },
    { subject: "Algorithms", progress: 38, timeSpent: "2.1h", lastStudied: "1 week ago" }
  ];

  const performanceMetrics = [
    { metric: "Average Score", value: "87%", change: "+5%", trend: "up" },
    { metric: "Study Consistency", value: "94%", change: "+12%", trend: "up" },
    { metric: "Topic Mastery", value: "73%", change: "+8%", trend: "up" },
    { metric: "Assessment Speed", value: "2.3min", change: "-15%", trend: "up" }
  ];

  const recentAchievements = [
    { title: "Speed Learner", description: "Completed 5 assessments in one day", date: "2024-01-15", icon: "⚡" },
    { title: "Consistent Student", description: "7-day study streak", date: "2024-01-14", icon: "🔥" },
    { title: "Subject Master", description: "Achieved 90%+ in Python Programming", date: "2024-01-13", icon: "🎯" },
    { title: "Knowledge Builder", description: "Processed 10 documents this week", date: "2024-01-12", icon: "📚" }
  ];

  return (
    <div className="space-y-8">
      {/* Weekly Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card className="border-0 shadow-soft bg-gradient-to-br from-primary/5 to-learning/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Study Time</p>
                <p className="text-2xl font-bold text-foreground">{weeklyStats.studyTime}h</p>
              </div>
              <Clock className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-soft bg-gradient-to-br from-learning/5 to-achievement/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Documents</p>
                <p className="text-2xl font-bold text-foreground">{weeklyStats.documentsReviewed}</p>
              </div>
              <BookOpen className="h-8 w-8 text-learning" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-soft bg-gradient-to-br from-achievement/5 to-analytics/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Assessments</p>
                <p className="text-2xl font-bold text-foreground">{weeklyStats.assessmentsPassed}</p>
              </div>
              <Brain className="h-8 w-8 text-achievement" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-soft bg-gradient-to-br from-analytics/5 to-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Score</p>
                <p className="text-2xl font-bold text-foreground">{weeklyStats.averageScore}%</p>
              </div>
              <Target className="h-8 w-8 text-analytics" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-soft bg-gradient-to-br from-achievement/10 to-learning/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Streak</p>
                <p className="text-2xl font-bold text-foreground">{weeklyStats.streak} days</p>
              </div>
              <Award className="h-8 w-8 text-achievement" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Progress & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-learning" />
              Subject Progress
            </CardTitle>
            <CardDescription>
              Track your progress across different learning topics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {subjectProgress.map((subject, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-foreground">{subject.subject}</h4>
                  <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                </div>
                <Progress value={subject.progress} className="h-2" />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{subject.timeSpent} studied</span>
                  <span>Last: {subject.lastStudied}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-analytics" />
              Performance Metrics
            </CardTitle>
            <CardDescription>
              Key performance indicators for your learning journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-card-secondary rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{metric.metric}</p>
                  <p className="text-sm text-muted-foreground">Current performance</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-foreground">{metric.value}</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className={`h-3 w-3 ${metric.trend === 'up' ? 'text-learning' : 'text-destructive'}`} />
                    <span className={metric.trend === 'up' ? 'text-learning' : 'text-destructive'}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Achievements */}
      <Card className="border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-achievement" />
            Recent Achievements
          </CardTitle>
          <CardDescription>
            Your latest milestones and accomplishments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="p-4 bg-card-secondary rounded-lg border border-border/50 hover:shadow-soft transition-all duration-200">
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <h4 className="font-medium text-foreground mb-1">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {achievement.date}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;