import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Check, AlertCircle, BookOpen, Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DocumentUpload = () => {
  const { toast } = useToast();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Mock uploaded documents
  const [documents] = useState([
    {
      id: 1,
      name: "Machine Learning Fundamentals.pdf",
      size: "2.4 MB",
      status: "processed",
      uploadDate: "2024-01-15",
      assessments: 5,
      topics: ["supervised learning", "neural networks", "regression"]
    },
    {
      id: 2,
      name: "Data Structures and Algorithms.docx",
      size: "1.8 MB",
      status: "processing",
      uploadDate: "2024-01-14",
      assessments: 0,
      topics: []
    },
    {
      id: 3,
      name: "Python Programming Guide.pdf",
      size: "3.2 MB",
      status: "processed",
      uploadDate: "2024-01-13",
      assessments: 8,
      topics: ["syntax", "data types", "functions", "classes"]
    }
  ]);

  const handleFileUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          toast({
            title: "Upload Complete",
            description: "Your document has been processed and is ready for learning!",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processed': return 'bg-learning text-learning-foreground';
      case 'processing': return 'bg-analytics text-analytics-foreground';
      case 'error': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processed': return <Check className="h-4 w-4" />;
      case 'processing': return <AlertCircle className="h-4 w-4 animate-pulse" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Upload Section */}
      <Card className="border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-primary" />
            Upload Learning Materials
          </CardTitle>
          <CardDescription>
            Upload PDFs, Word documents, or text files to generate personalized assessments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Drop your files here</h3>
            <p className="text-muted-foreground mb-4">
              Supports PDF, DOCX, TXT files up to 10MB
            </p>
            <Button onClick={handleFileUpload} disabled={isUploading}>
              {isUploading ? "Processing..." : "Choose Files"}
            </Button>
            {isUploading && (
              <div className="mt-4 max-w-xs mx-auto">
                <Progress value={uploadProgress} />
                <p className="text-sm text-muted-foreground mt-2">
                  Processing document... {uploadProgress}%
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Documents List */}
      <Card className="border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-learning" />
            Your Documents
          </CardTitle>
          <CardDescription>
            Manage your uploaded learning materials and generated assessments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-6 bg-card-secondary rounded-lg border border-border/50 hover:shadow-soft transition-all duration-200">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground mb-1">{doc.name}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>Uploaded {doc.uploadDate}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getStatusColor(doc.status)}>
                      {getStatusIcon(doc.status)}
                      <span className="ml-1 capitalize">{doc.status}</span>
                    </Badge>
                    
                    {doc.assessments > 0 && (
                      <Badge variant="outline">
                        <Brain className="h-3 w-3 mr-1" />
                        {doc.assessments} Assessments
                      </Badge>
                    )}
                  </div>

                  {doc.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {doc.topics.map((topic, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                {doc.status === 'processed' && (
                  <Button size="sm" variant="outline">
                    Study
                  </Button>
                )}
                <Button size="sm" variant="outline">
                  View
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentUpload;