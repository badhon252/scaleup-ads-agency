export function SocialLinks() {
  return (
    <div className="text-white">
      <h3 className="text-lg font-medium mb-4">Follow Us</h3>
      <div className="space-y-2">
        {[
          "Dribbble",
          "Behance",
          "Instagram",
          "Facebook",
          "Twitter",
          "YouTube",
        ].map((platform) => (
          <a
            key={platform}
            href="#"
            className="block text-gray-400 hover:text-white transition-colors"
          >
            {platform}
          </a>
        ))}
      </div>
    </div>
  );
}
