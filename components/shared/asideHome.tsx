'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from 'react';

export const AsideHome: React.FC = ({ }) => {

    return (
        <Tabs defaultValue="account" className="absolute top-0 right-0 w-[400px] h-dvh bg-white">
            <TabsList className="w-full">
                <TabsTrigger
                    value="account"
                    className="w-1/2 fz-2xl"
                >
                    Account
                </TabsTrigger>
                <TabsTrigger
                    value="password"
                    className="w-1/2"
                >
                    Password
                </TabsTrigger>
            </TabsList>
            <TabsContent value="account">

            </TabsContent>
            <TabsContent value="password">

            </TabsContent>
        </Tabs>
    );
};
