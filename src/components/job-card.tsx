import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';
import type { Job } from '@/lib/placeholder-data';

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-start gap-4">
        <Image
          src={job.logo}
          alt={`${job.company} logo`}
          width={64}
          height={64}
          className="rounded-lg border"
          data-ai-hint={job.dataAiHint || 'company logo'}
        />
        <div className="flex-grow">
          <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
          <CardDescription className="text-base">{job.company}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center text-muted-foreground">
          <MapPin className="h-4 w-4 ml-2" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <Briefcase className="h-4 w-4 ml-2" />
          <span>{job.type}</span>
        </div>
        {job.salary && (
          <div className="flex items-center text-muted-foreground">
            <DollarSign className="h-4 w-4 ml-2" />
            <span>{job.salary}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground flex items-center">
          <Clock className="h-4 w-4 ml-1" />
          {job.postedDate}
        </div>
        <Button>تقديم الآن</Button>
      </CardFooter>
    </Card>
  );
}
