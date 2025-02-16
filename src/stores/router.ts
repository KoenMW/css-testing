import { writable } from "svelte/store";
import Home from "../views/Home.svelte";
import type { Component } from "svelte";

export type Route = {
  name: string;
  path: string;
  component: Component;
};

export const path = writable(
  new URLSearchParams(window.location.search).get("route") ?? ""
);

export const pages: Route[] = [
  {
    name: "Home",
    path: "",
    component: Home,
  },
];

export const setPath = () => {
  const params = new URLSearchParams(window.location.search);
  const paramPath = params.get("route") || "";
  path.set(paramPath);
};

export const goTo = (route: string) => {
  const url = new URL(window.location.href);
  url.searchParams.set("route", route);
  history.pushState({}, "", url.toString());
  setPath();
};
