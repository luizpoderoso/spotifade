"use client";

import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { countMusicsByArtists } from "@/lib/functional/lib";
import { useEffect, useState } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

export default function CountByArtistsDialog({ initialSongs }) {
  const [open, onOpenChange] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const groupedByArtist = Object.entries(countMusicsByArtists(initialSongs));
    setChartData(groupedByArtist.map(([artist, count]) => ({ artist, count })));
  }, [initialSongs]);

  const chartConfig = {
    count: {
      label: "QTD. Músicas",
      color: "#eb1243",
    },
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Contar por Artista</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contagem por Artistas</DialogTitle>
            <DialogDescription>
              Contagem de quantas músicas cada artista tem
            </DialogDescription>
          </DialogHeader>
          {chartData && (
            <ChartContainer
              config={chartConfig}
              className="h-full max-h-[200px]"
            >
              <BarChart accessibilityLayer data={chartData}>
                <ChartTooltip content={<ChartTooltipContent />} />
                <XAxis
                  dataKey="artist"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis dataKey="count" tickCount={3} tickMargin={10} />
                <Bar dataKey="count" fill="var(--color-count)" radius={8} />
              </BarChart>
            </ChartContainer>
          )}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
