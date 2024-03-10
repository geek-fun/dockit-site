<script setup>
const platforms = {
  'macos_x86': 'universal.dmg',
  'macos_arm': 'universal.dmg',
  'windows_x86': 'x64.Setup.exe',
  'windows_arm': 'arm64.Setup.exe',
  'linux_x86': '_amd64.deb',
  'linux_arm': '_arm64.deb'
};
const getLatestLinks = async () => {
  const data = await fetch('https://api.github.com/repos/geek-fun/dockit/releases/latest')
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return data.assets.map((item) => ({
    name: item.name,
    url: item.browser_download_url
  }));
}

const downloadFn = async (event) => {
  const {architecture, platform} = await navigator.userAgentData.getHighEntropyValues(['architecture']);
  const links = await getLatestLinks();
  const link = links.find((item) => item.name.endsWith(platforms[`${platform}_${architecture}`.toLowerCase()]));
  if (link) {
    window.open(link.url, '_blank').focus();
  }else {
    console.error('downloadFn', 'no link found')
  }
  console.log('downloadFn', {
    links,
    entropyValues:{architecture, platform}
  })
}
</script>
<template>
  <p>
    Download the the latest of DocKit for your platform, or you can find the historic/cross-platforms version in
    <a href="https://github.com/geek-fun/dockit/releases">github release</a>
  </p>
  <button :class="$style.downloadButton" @click="downloadFn"><i class="fab fa-apple"></i>Download DocKit</button>
</template>
<style module>
.downloadButton {
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: #87CEFA; /* Light Blue color */
  color: #fff;
  border: 1px solid #87CEFA; /* Light Blue color */
  border-radius: 10px; /* Rounded corners */
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px; /* Add some space between buttons */
}

.downloadButton:hover {
  background-color: #6495ED; /* Slightly darker blue on hover */
}

.downloadButton i {
  margin-right: 8px; /* Adjust the space between icon and text */
}
</style>
