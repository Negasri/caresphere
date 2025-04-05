
import React from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound, Settings, Phone, Users, Shield, Heart, CalendarClock } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Profile = () => {
  return (
    <div className="min-h-screen pb-20 md:pl-64">
      <Navigation />
      
      <main className="container max-w-4xl pt-8 px-4">
        <header className="mb-8 text-left">
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and settings</p>
        </header>

        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="" alt="Mary Johnson" />
                    <AvatarFallback className="text-xl bg-care-100 text-care-700">MJ</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm" className="mt-4">
                    Change Photo
                  </Button>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold">Mary Johnson</h2>
                  <p className="text-muted-foreground">Born April 15, 1950 (75 years)</p>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">2 Emergency Contacts</span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                    <Button>Edit Profile</Button>
                    <Button variant="outline">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="medical" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="medical">Medical Info</TabsTrigger>
            <TabsTrigger value="emergency">Emergency Contacts</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>
          
          <TabsContent value="medical">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-care-600" />
                    Medical Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Hypertension (High Blood Pressure)</li>
                    <li>Type 2 Diabetes (controlled)</li>
                    <li>Mild Arthritis</li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-4">
                    Update Medical Information
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="mr-2 h-5 w-5 text-care-600" />
                    Current Medications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="font-medium">Medication</div>
                      <div className="font-medium">Dosage</div>
                      <div className="font-medium">Frequency</div>
                      <div className="font-medium">Purpose</div>
                    </div>
                    <hr />
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div>Aspirin</div>
                      <div>81mg</div>
                      <div>Once daily</div>
                      <div>Heart health</div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div>Atorvastatin</div>
                      <div>20mg</div>
                      <div>Once daily</div>
                      <div>Cholesterol</div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div>Vitamin D</div>
                      <div>1000 IU</div>
                      <div>Once daily</div>
                      <div>Bone health</div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm">
                      Add Medication
                    </Button>
                    <Button variant="outline" size="sm">
                      Update List
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserRound className="mr-2 h-5 w-5 text-care-600" />
                    Primary Doctor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">Dr. Sarah Smith</p>
                    <p>Family Medicine</p>
                    <p>Oakwood Medical Center</p>
                    <p>Phone: (555) 987-6543</p>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4">
                    Update Doctor Information
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="emergency">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-care-600" />
                    Emergency Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Jennifer Johnson (Daughter)</h3>
                          <p className="text-muted-foreground">Primary Contact</p>
                          <p className="mt-2">Phone: (555) 234-5678</p>
                          <p>Email: jennifer@example.com</p>
                          <p>Lives 5 miles away</p>
                        </div>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Robert Johnson (Son)</h3>
                          <p className="text-muted-foreground">Secondary Contact</p>
                          <p className="mt-2">Phone: (555) 345-6789</p>
                          <p>Email: robert@example.com</p>
                          <p>Lives 20 miles away</p>
                        </div>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="mt-4">
                    Add New Contact
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="preferences">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="mr-2 h-5 w-5 text-care-600" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Medication Reminders</p>
                        <p className="text-sm text-muted-foreground">Get reminded when it's time to take medication</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Appointment Alerts</p>
                        <p className="text-sm text-muted-foreground">Get alerts before scheduled appointments</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Health Monitoring</p>
                        <p className="text-sm text-muted-foreground">Get alerts when health metrics need attention</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Social Events</p>
                        <p className="text-sm text-muted-foreground">Get notified about local community events</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CalendarClock className="mr-2 h-5 w-5 text-care-600" />
                    Reminder Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Voice Reminders</p>
                        <p className="text-sm text-muted-foreground">Announce reminders with voice</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Reminder Frequency</p>
                        <p className="text-sm text-muted-foreground">How often to repeat missed reminders</p>
                      </div>
                      <select className="border rounded p-1">
                        <option>Every 5 minutes</option>
                        <option>Every 10 minutes</option>
                        <option>Every 15 minutes</option>
                        <option>Every 30 minutes</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Quiet Hours</p>
                        <p className="text-sm text-muted-foreground">No reminders during sleep time</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Emergency Contact Alerts</p>
                        <p className="text-sm text-muted-foreground">Notify family when critical alerts occur</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;
