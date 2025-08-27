import {
  AppStoreButton,
  GalaxyStoreButton,
  GooglePlayButton,
} from "@/app/components/buttons/app-store-buttons";

export const AppStoreButtonDefaultDemo = () => {
  return (
    <div className="flex flex-col items-start gap-3 md:flex-row">
      <GooglePlayButton size="md" />
      <AppStoreButton size="md" />
      <GalaxyStoreButton size="md" />
    </div>
  );
};
