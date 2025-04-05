
import React from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, Bell, Clock, Calendar, MessageSquare } from "lucide-react";

const Alerts = () => {
  // Mock data
  const medicationAlerts = [
    { 
      id: 1, 
      title: "Take Medication", 
      description: "It's time for your evening dose of Atorvastatin",
      time: "8:00 PM", 
      status: "pending",
      date: new Date()
    },
    { 
      id: 2, 
      title: "Medication Reminder", 
      description: "Remember to take your Vitamin D tomorrow morning",
      time: "8:00 AM", 
      status: "upcoming",
      date: new Date(Date.now() + 86400000) // tomorrow
    },
    { 
      id: 3, 
      title: "Medication Taken", 
      description: "You've taken your morning dose of Aspirin",
      time: "8:00 AM", 
      status: "completed",
      date: new Date()
    }
  ];

  const appointmentAlerts = [
    { 
      id: 4, 
      title: "Doctor Appointment", 
      description: "You have an appointment with Dr. Smith tomorrow",
      time: "10:00 AM", 
      status: "upcoming",
      date: new Date(Date.now() + 86400000) // tomorrow
    },
    { 
      id: 5, 
      title: "Video Call", 
      description: "Scheduled video call with your family",
      time: "4:00 PM", 
      status: "upcoming",
      date: new Date()
    }
  ];

  const healthAlerts = [
    { 
      id: 6, 
      title: "Blood Pressure Check", 
      description: "Your blood pressure readings have been higher than normal",
      time: "1 hour ago", 
      status: "warning",
      date: new Date(Date.now() - 3600000) // 1 hour ago
    },
    { 
      id: 7, 
      title: "Sleep Pattern", 
      description: "You've been getting good sleep this week",
      time: "Today", 
      status: "info",
      date: new Date()
    }
  ];

  // Combine all alerts for "All" tab
  const allAlerts = [...medicationAlerts, ...appointmentAlerts, ...healthAlerts].sort((a, b) => {
    // Sort by date (most recent first)
    return b.date.getTime() - a.date.getTime();
  });

  // Get the status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-amber-500">Pending</Badge>;
      case "upcoming":
        return <Badge className="bg-blue-500">Upcoming</Badge>;
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "warning":
        return <Badge className="bg-red-500">Warning</Badge>;
      case "info":
        return <Badge className="bg-care-500">Info</Badge>;
      default:
        return null;
    }
  };

  // Get the status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-10 w-10 text-amber-500" />;
      case "upcoming":
        return <Calendar className="h-10 w-10 text-blue-500" />;
      case "completed":
        return <CheckCircle2 className="h-10 w-10 text-green-500" />;
      case "warning":
        return <AlertCircle className="h-10 w-10 text-red-500" />;
      case "info":
        return <MessageSquare className="h-10 w-10 text-care-500" />;
      default:
        return <Bell className="h-10 w-10 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen pb-20 md:pl-64">
      <Navigation />
      
      <main className="container max-w-4xl pt-8 px-4">
        <header className="mb-8 text-left">
          <h1 className="text-3xl font-bold text-gray-900">Alerts</h1>
          <p className="text-muted-foreground">Stay informed about your health and appointments</p>
        </header>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="medication">Medication</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="health">Health</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="space-y-4">
              {allAlerts.map((alert) => (
                <Card key={alert.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="mt-1">
                        {getStatusIcon(alert.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-medium">{alert.title}</h3>
                          {getStatusBadge(alert.status)}
                        </div>
                        <p className="text-muted-foreground mb-2">{alert.description}</p>
                        <p className="text-sm text-muted-foreground">{alert.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="medication">
            <div className="space-y-4">
              {medicationAlerts.map((alert) => (
                <Card key={alert.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="mt-1">
                        {getStatusIcon(alert.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-medium">{alert.title}</h3>
                          {getStatusBadge(alert.status)}
                        </div>
                        <p className="text-muted-foreground mb-2">{alert.description}</p>
                        <p className="text-sm text-muted-foreground">{alert.time}</p>
                        {alert.status === 'pending' && (
                          <div className="mt-4 flex gap-2">
                            <Button size="sm" variant="outline">Snooze</Button>
                            <Button size="sm">Mark as Taken</Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="appointments">
            <div className="space-y-4">
              {appointmentAlerts.map((alert) => (
                <Card key={alert.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="mt-1">
                        {getStatusIcon(alert.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-medium">{alert.title}</h3>
                          {getStatusBadge(alert.status)}
                        </div>
                        <p className="text-muted-foreground mb-2">{alert.description}</p>
                        <p className="text-sm text-muted-foreground">{alert.time}</p>
                        {alert.status === 'upcoming' && (
                          <div className="mt-4 flex gap-2">
                            <Button size="sm" variant="outline">Reschedule</Button>
                            <Button size="sm">View Details</Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="health">
            <div className="space-y-4">
              {healthAlerts.map((alert) => (
                <Card key={alert.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="mt-1">
                        {getStatusIcon(alert.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-medium">{alert.title}</h3>
                          {getStatusBadge(alert.status)}
                        </div>
                        <p className="text-muted-foreground mb-2">{alert.description}</p>
                        <p className="text-sm text-muted-foreground">{alert.time}</p>
                        {alert.status === 'warning' && (
                          <div className="mt-4 flex gap-2">
                            <Button size="sm" variant="outline">Dismiss</Button>
                            <Button size="sm">Contact Doctor</Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Alerts;
