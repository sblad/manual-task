import { fetchAboutData } from "@app/lib/data";
import { AboutViewModel } from "../domain/about.view-model";

export const getAboutData = async () => {
  const sectionData = await fetchAboutData();
  const viewModel = new AboutViewModel(sectionData);

  return { viewModel };
};
