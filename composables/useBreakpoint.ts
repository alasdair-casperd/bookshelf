type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl" | "+";

const break_point = ref<Breakpoint>("sm");
const screen_width = ref<number>();

window.onresize = () => {
  break_point.value = determineBreakpoint();
  screen_width.value = window.innerWidth;
};

const determineBreakpoint = (): Breakpoint => {
  if (window.innerWidth < 640) {
    return "sm";
  } else if (window.innerWidth < 768) {
    return "md";
  } else if (window.innerWidth < 1024) {
    return "lg";
  } else if (window.innerWidth < 1280) {
    return "xl";
  } else if (window.innerWidth < 1536) {
    return "2xl";
  } else {
    return "+";
  }
};

export const useBreakpoint = () => {
  return { break_point, screen_width };
};
