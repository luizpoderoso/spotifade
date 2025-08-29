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
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

export default function CountByArtistsDialog({ initialSongs }) {
  const [open, onOpenChange] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const groupedByArtist = Object.entries(countMusicsByArtists(initialSongs));
    // Ordenar os dados para que o maior artista apareça no topo
    const sortedData = groupedByArtist.sort(([, a], [, b]) => b - a);
    setChartData(sortedData.map(([artist, count]) => ({ artist, count })));
  }, [initialSongs, open]);

  const chartConfig = {
    count: {
      label: "QTD. Músicas",
      color: "#ff0032",
    },
    label: {
      color: "hsl(var(--background))",
    },
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Contar por Artista</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Contagem por Artistas</DialogTitle>
            <DialogDescription>
              Contagem de quantas músicas cada artista tem
            </DialogDescription>
          </DialogHeader>
          {chartData.length > 0 && (
            <div
              className={`relative h-full max-h-[250px] w-full overflow-y-auto pr-4`}
            >
              <ChartContainer config={chartConfig} className="w-full">
                <BarChart
                  barSize={40}
                  accessibilityLayer
                  data={chartData}
                  layout="vertical"
                  margin={{
                    left: 0,
                    right: 20,
                  }}
                >
                  <YAxis
                    dataKey="artist"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    width={100}
                  />
                  <XAxis dataKey="count" type="number" hide />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Bar dataKey="count" fill="var(--color-count)" radius={4}>
                    <LabelList
                      dataKey="count"
                      position="right"
                      offset={8}
                      className="fill-foreground"
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          )}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
