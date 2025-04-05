
import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CalendarCheck, Bell, UserRound, Heart, Activity, Phone, Users, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true);

  // Show welcome toast when the component mounts
  useEffect(() => {
    if (showWelcomeBanner) {
      toast({
        title: "Welcome to CareSphere",
        description: "Your gateway to comfort",
        duration: 5000,
      });
    }
  }, [showWelcomeBanner]);

  // Mock data
  const healthStats = {
    heartRate: 72,
    bloodPressure: "120/80",
    sleep: 7.5,
    steps: 4500
  };

  const medications = [
    { name: "Aspirin", time: "8:00 AM", taken: true },
    { name: "Vitamin D", time: "8:00 AM", taken: true },
    { name: "Atorvastatin", time: "8:00 PM", taken: false }
  ];

  const upcomingEvents = [
    { title: "Doctor Appointment", date: "Tomorrow, 10:00 AM" },
    { title: "Video Call with Family", date: "Today, 4:00 PM" }
  ];

  return (
    <div className="min-h-screen pb-20 md:pl-64">
      <Navigation />
      
      <main className="container max-w-4xl pt-8 px-4">
        {showWelcomeBanner && (
          <div className="mb-6 p-4 bg-gradient-to-r from-care-600 to-healing-500 text-white rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Welcome to CareSphere</h2>
                <p className="text-white/90">Your gateway to comfort</p>
              </div>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20"
                onClick={() => setShowWelcomeBanner(false)}
              >
                Dismiss
              </Button>
            </div>
          </div>
        )}

        <header className="mb-8 text-left">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, Mary</h1>
          <p className="text-muted-foreground">Today is a great day to stay healthy!</p>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-care-600" />
            Health Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <Heart className="h-8 w-8 text-red-500 animate-pulse-slow" />
                <p className="text-sm text-muted-foreground mt-1">Heart Rate</p>
                <p className="text-xl font-bold">{healthStats.heartRate} <span className="text-sm font-normal">bpm</span></p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <Activity className="h-8 w-8 text-care-600" />
                <p className="text-sm text-muted-foreground mt-1">Blood Pressure</p>
                <p className="text-xl font-bold">{healthStats.bloodPressure}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <Users className="h-8 w-8 text-healing-500" />
                <p className="text-sm text-muted-foreground mt-1">Sleep</p>
                <p className="text-xl font-bold">{healthStats.sleep} <span className="text-sm font-normal">hrs</span></p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <PlusCircle className="h-8 w-8 text-healing-600" />
                <p className="text-sm text-muted-foreground mt-1">Steps</p>
                <p className="text-xl font-bold">{healthStats.steps}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5 text-care-600" />
            Today's Medications
          </h2>
          <Card>
            <CardContent className="p-4">
              <ul className="space-y-3">
                {medications.map((med, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`h-3 w-3 rounded-full ${med.taken ? 'bg-green-500' : 'bg-care-300'}`}></div>
                      <span>{med.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{med.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Progress value={66} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2 text-right">2/3 medications taken</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CalendarCheck className="h-5 w-5 text-care-600" />
            Upcoming Events
          </h2>
          <Card>
            <CardContent className="p-4">
              <ul className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                    <Button variant="outline" size="sm">Remind</Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Phone className="h-5 w-5 text-care-600" />
            Emergency Contact
          </h2>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="font-semibold">Need immediate assistance?</p>
                <p className="text-sm text-muted-foreground">Press the button to call for help</p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700">
                Emergency
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;
