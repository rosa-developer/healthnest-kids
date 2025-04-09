
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ArrowRight, Brain, Baby, Heart, Moon, Apple, Calendar, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Advice = () => {
  const { toast } = useToast();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search",
      description: "Search functionality will be available in the next update!",
    });
  };
  
  const handleReadMore = () => {
    toast({
      title: "Article",
      description: "Full article view will be available in the next update!",
    });
  };

  return (
    <div className="main-container">
      <PageTransition>
        <section className="mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <div className="flex-1">
              <div className="chip bg-primary/20 text-primary mb-4 font-medium">
                Advice for 8-Month-Olds
              </div>
              <div className="glass-panel bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl mb-6 border border-blue-100 dark:border-blue-800/30">
                <h2 className="text-xl font-semibold mb-3 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-primary" />
                  What to expect this month
                </h2>
                <p className="text-muted-foreground mb-4">
                  Your baby is becoming more mobile and curious. They may be crawling, 
                  pulling up to stand, and exploring their environment.
                </p>
                <Button 
                  onClick={handleReadMore}
                  className="bg-white text-primary hover:bg-white/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 shadow-sm"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex-1 md:max-w-xs">
              <form onSubmit={handleSearch} className="relative mb-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for parenting advice..."
                  className="pl-10 bg-card border-border rounded-xl"
                />
                <Button type="submit" size="sm" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 rounded-lg">
                  Search
                </Button>
              </form>
            </div>
          </div>
        </section>

        <Tabs defaultValue="development" className="mb-8">
          <TabsList className="grid grid-cols-4 w-full bg-muted/50 rounded-xl p-1 mb-2">
            <TabsTrigger value="development" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Development
            </TabsTrigger>
            <TabsTrigger value="health" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Health
            </TabsTrigger>
            <TabsTrigger value="sleep" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Sleep
            </TabsTrigger>
            <TabsTrigger value="nutrition" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Nutrition
            </TabsTrigger>
          </TabsList>

          <TabsContent value="development" className="mt-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border border-border shadow-soft overflow-hidden card-hover">
                <CardHeader className="pb-2 bg-gradient-to-r from-purple-50/80 to-purple-50/20 dark:from-purple-900/20 dark:to-transparent">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <Brain className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Cognitive Development: 8 Months</CardTitle>
                      <p className="text-sm text-muted-foreground">Expert advice from Dr. Martinez</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">
                    At 8 months, your baby's brain is rapidly developing. They're learning to recognize familiar faces, 
                    respond to their name, and understand simple cause-and-effect relationships.
                  </p>
                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium">Activities to try:</h4>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Play peek-a-boo games to develop object permanence</li>
                      <li>Introduce simple puzzles or stacking toys</li>
                      <li>Read picture books and name objects</li>
                      <li>Hide toys partially under a blanket for them to find</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    Updated: April 10, 2023
                  </div>
                  <Button variant="link" onClick={handleReadMore} className="p-0">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border border-border shadow-soft overflow-hidden card-hover">
                <CardHeader className="pb-2 bg-gradient-to-r from-blue-50/80 to-blue-50/20 dark:from-blue-900/20 dark:to-transparent">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <Baby className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Motor Skills at 8 Months</CardTitle>
                      <p className="text-sm text-muted-foreground">By Dr. Johnson, Pediatrician</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">
                    Most 8-month-olds are mastering sitting without support and may be crawling or
                    preparing to crawl. Some babies might be pulling up to stand using furniture.
                  </p>
                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium">What to encourage:</h4>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Create safe spaces for exploration</li>
                      <li>Offer toys slightly out of reach to encourage movement</li>
                      <li>Practice assisted standing</li>
                      <li>Allow plenty of tummy time</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    Updated: April 5, 2023
                  </div>
                  <Button variant="link" onClick={handleReadMore} className="p-0">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="health" className="mt-6 animate-fade-in">
            <Card className="border border-border shadow-soft overflow-hidden card-hover">
              <CardHeader className="pb-2 bg-gradient-to-r from-pink-50/80 to-pink-50/20 dark:from-pink-900/20 dark:to-transparent">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Heart className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Common Health Concerns at 8 Months</CardTitle>
                    <p className="text-sm text-muted-foreground">By Dr. Patel, Pediatrician</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground">
                  As your baby becomes more active, you might notice new health concerns. Teething, minor colds,
                  and slight injuries from exploration are common at this age.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">What to watch for:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Teething symptoms (drooling, irritability, gum swelling)</li>
                    <li>Ear infections (tugging at ears, fever, irritability)</li>
                    <li>Minor bumps and bruises from increased mobility</li>
                    <li>Diaper rash from dietary changes</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Updated: April 12, 2023
                </div>
                <Button variant="link" onClick={handleReadMore} className="p-0">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="sleep" className="mt-6 animate-fade-in">
            <Card className="border border-border shadow-soft overflow-hidden card-hover">
              <CardHeader className="pb-2 bg-gradient-to-r from-indigo-50/80 to-indigo-50/20 dark:from-indigo-900/20 dark:to-transparent">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Moon className="h-5 w-5 text-indigo-500" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sleep Patterns at 8 Months</CardTitle>
                    <p className="text-sm text-muted-foreground">By Sleep Specialist Dr. Chen</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground">
                  Many 8-month-olds sleep 12-14 hours total per day, including naps. Sleep regression
                  can occur around this age due to developmental leaps and increased mobility.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Tips for better sleep:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Maintain a consistent bedtime routine</li>
                    <li>Ensure baby gets plenty of activity during the day</li>
                    <li>Create a calm sleep environment</li>
                    <li>Consider an earlier bedtime if needed</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Updated: April 8, 2023
                </div>
                <Button variant="link" onClick={handleReadMore} className="p-0">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="nutrition" className="mt-6 animate-fade-in">
            <Card className="border border-border shadow-soft overflow-hidden card-hover">
              <CardHeader className="pb-2 bg-gradient-to-r from-green-50/80 to-green-50/20 dark:from-green-900/20 dark:to-transparent">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Apple className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Nutrition at 8 Months</CardTitle>
                    <p className="text-sm text-muted-foreground">By Nutritionist Dr. Rivera</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground">
                  At 8 months, your baby should be eating a variety of solid foods in addition to breast milk
                  or formula. This is a great time to introduce different textures and flavors.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Foods to introduce:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Soft, small pieces of fruits and vegetables</li>
                    <li>Well-cooked pasta or rice</li>
                    <li>Yogurt and soft cheeses</li>
                    <li>Small pieces of tofu or well-cooked meat</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Updated: April 15, 2023
                </div>
                <Button variant="link" onClick={handleReadMore} className="p-0">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Upcoming Milestones
            </h2>
            <Button variant="ghost" className="text-primary">
              See All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card className="border border-border shadow-soft card-hover bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-900/5">
              <CardContent className="pt-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Baby className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="chip bg-blue-100/80 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    9-10 months
                  </div>
                </div>
                <h3 className="font-medium text-base">Standing with Support</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Your baby may soon begin pulling up to stand while holding onto furniture.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border shadow-soft card-hover bg-gradient-to-br from-white to-pink-50/30 dark:from-gray-900 dark:to-pink-900/5">
              <CardContent className="pt-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-pink-500" />
                  </div>
                  <div className="chip bg-pink-100/80 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
                    9-10 months
                  </div>
                </div>
                <h3 className="font-medium text-base">First Words</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Your baby may soon start saying simple words like "mama" or "dada".
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border shadow-soft card-hover bg-gradient-to-br from-white to-green-50/30 dark:from-gray-900 dark:to-green-900/5">
              <CardContent className="pt-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="chip bg-green-100/80 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    9 months
                  </div>
                </div>
                <h3 className="font-medium text-base">9-Month Checkup</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Prepare for your baby's 9-month well-visit and vaccinations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </PageTransition>
    </div>
  );
};

export default Advice;
