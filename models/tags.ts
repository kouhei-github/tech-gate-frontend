export type TagType = {
  name: string
  url: string
}

export const getAllTags = async (): Promise<TagType[]> => {
  const config = useRuntimeConfig();
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await fetch(
      `${config.public.apiUrl}/tag`,
      { method: "GET", headers: headers}
  )
  const data: TagType[] = await res.json()
  return data
};


export const tags = [
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/0ee2c162b0573701a6baf468f4d30549f8d03e9b/medium.jpg?1660803670",
        "name": "Python"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/12ab79a9d2e703932a2c08dc6a4bcc9fb544f5c3/medium.jpg?1650353657",
        "name": "JavaScript"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/04ddc69fa03cd83041203ac067139d349ae8dee9/medium.jpg?1650353332",
        "name": "Ruby"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/49756c6faea5d349a2b5f167301831adf6b509a1/medium.jpg?1650353426",
        "name": "Rails"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/e92cc40a9770111ffa5833b87b3fb7e04a0a2b5e/medium.jpg?1650353581",
        "name": "AWS"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/7ba7052463d53588edd98d62b34d13329672ba6b/medium.jpg?1650353640",
        "name": "初心者"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/7c64a9d81f287a4efc8559db7474202acc76cadc/medium.jpg?1650353379",
        "name": "PHP"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/e80762025a999869ed00c08acc9bfbd7f783107c/medium.jpg?1650353616",
        "name": "Docker"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/6072fa4965bc9540233fc4179fdfef2cd1ea1964/medium.jpg?1650353809",
        "name": "Java"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/8a66b19fd606b4099edacc6e6d735de4e148c271/medium.jpg?1650353992",
        "name": "iOS"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/8924010780db484a83145542a3e49c6c2084ecb7/medium.jpg?1401738498",
        "name": "Swift"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/178bc8d7fa04e2206a7762fbe9a894e2f2737d9a/medium.jpg?1662620512",
        "name": "Android"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/754320454031c6306b592eef22ffe3425641e568/medium.jpg?1636957283",
        "name": "Linux"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/685ad19e898bd7f40f85ee39aa02734256cc2f39/medium.jpg?1482848645",
        "name": "Node.js"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/30af4a22607c5936f3ac647331e94978f6feb20a/medium.jpg?1462785908",
        "name": "Python3"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/8608ef890c583971319de5922df976a7decc08f7/medium.jpg?1622347424",
        "name": "Git"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/0f473e44c08bd79af105a8412a16cc1b0485c4f7/medium.jpg?1650353300",
        "name": "C#"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/1621e15062bb645669bf4fd12bbf02e1763e5d22/medium.jpg?1633667877",
        "name": "Unity"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/4baa5d7b710edd14aa23c57088de50abaa520fb5/medium.jpg?1596705704",
        "name": "React"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/c907c85f31edf8d02f7f37d2f2e2e2e92d02ee0e/medium.jpg?1650353474",
        "name": "Laravel"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/2e2d611d5ebf0088e2922fe9fe87612dbcc6f99c/medium.jpg?1641285406",
        "name": "Mac"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/05238fd851b4f2831d419071e4a86e3f8ba9096e/medium.jpg?1581479301",
        "name": "Vue.js"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/b4438ce0a78810256791a266e87c74a76b555de1/medium.jpg?1419699326",
        "name": "CSS"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/5dd0a3684d0ad54cef6b7cd6c52918be777435a3/medium.jpg?1513494620",
        "name": "TypeScript"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/5b828b161719ccfd09a2c87549abed8157028ed4/medium.jpg?1479283105",
        "name": "MySQL"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/864a094d7aa8940bf46ce87f8841a88f017abbfa/medium.jpg?1490806921",
        "name": "HTML"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/e246e73185e846eec23e2492951e34663c83b46b/medium.jpg?1584432037",
        "name": "Go"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/a94d4d239b3b0b83723d5b56c050ffc54b8593e7/medium.jpg?1394635775",
        "name": "機械学習"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/a32b68d1ba778f8216edb2b52cc77bee2d3f4091/medium.jpg?1569219548",
        "name": "GitHub"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/fe7df47710bdae8b8565b323841a6b89e2f66b89/medium.jpg?1515774066",
        "name": "C++"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/a9ad076b2063a3ffdae6d3d1ff23eb702662bd6e/medium.jpg?1395329690",
        "name": "Windows"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/292ed0b12843d6450ac8a9339844fcfe1e8d4037/medium.jpg?1636957495",
        "name": "Ubuntu"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/e47460556ac0d15a9615eae279414a148a78c35d/medium.jpg?1515773130",
        "name": "RaspberryPi"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/8a3251a1c42df8188f03a72fea41634cc1a09386/medium.jpg?1613273536",
        "name": "Xcode"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/f817a868f99aa3d58c09a020b16e9a83dbd9c25f/medium.jpg?1560144607",
        "name": "VSCode"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/71f564957e7761fd9629ef0dd5bd7fe84ef84800/medium.jpg?1622455169",
        "name": "Azure"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/adfd3568a429637ca558c7943fec8c96f9394294/medium.jpg?1457084234",
        "name": "Kotlin"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/939d0662a5fbb390bd25b777a8d243d25624b4f2/medium.jpg?1387907908",
        "name": "SQL"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/e3afe1164eee812a7af2d6cdba6847f368fb27c1/medium.jpg?1559715994",
        "name": "DeepLearning"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/806d06634e7415bb0746eb04e50a49932906986d/medium.jpg?1486102890",
        "name": "CentOS"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/f34f98b8783e6fe5e99dd4b5c9861ba7f44c1f7d/medium.jpg?1514356003",
        "name": "kubernetes"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/0bae3b901f6a45600c6103d12830543de4cbab3e/medium.jpg?1514026738",
        "name": "jQuery"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/be1372b7baec4cfe9eedfbaa4fc23063d8629dd1/medium.jpg?1478669535",
        "name": "Firebase"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/f208e2cacf5fa6beb079915fb58bb924ff14f243/medium.jpg?1481808839",
        "name": "Bash"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/bf067f2909831230240a95395838488bf5829f78/medium.jpg?1612845431",
        "name": "Flutter"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/237b7e75277bdc4ba63bc1323738d4f075f2b190/medium.jpg?1622932668",
        "name": "lambda"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/d49dd05ea85817958a672bfdf967012e636609dc/medium.jpg?1364838101",
        "name": "Django"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/f950b6b716b67ae207d550399a21b5502f6f3497/medium.jpg?1435639500",
        "name": "WordPress"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/f5bdb8b2073914de85a5bc872ce489c3a3fd545f/medium.jpg?1588599534",
        "name": "AtCoder"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/26c441341a525c8a43f2d6ee8a0eccf4433480bd/medium.jpg?1638077183",
        "name": "ポエム"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/851256141e0ae6188e423c46805c52b0e0583db5/medium.jpg?1373008367",
        "name": "PostgreSQL"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/a8f030ff94adbce98c79fc777059cfaf2825ba6c/medium.jpg?1587926249",
        "name": "C"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/a968196a6a3344c9710b530de9b61b361c2f63f6/medium.jpg?1628497663",
        "name": "EC2"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/798b52773f9b91f4ffbf5a2e9d1ed6c4f91c88f4/medium.jpg?1364837741",
        "name": "Vim"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/45809bfe3a56a96f79bca46a266f70bc92381cc1/medium.jpg?1450330776",
        "name": "docker-compose"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/7189a0cd3bf07184d243e709c90eb522529125a6/medium.jpg?1514358546",
        "name": "Heroku"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/2c9cc2f65ea3d93fd55d5fdfbafeaa984657c72e/medium.jpg?1560475150",
        "name": "Excel"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/16847e4a60e1db406b7079613419fe60ccc799eb/medium.jpg?1436171748",
        "name": "MacOSX"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/7f8e2124a7c38b1f427b7a8ec36260e38c4e7bcb/medium.jpg?1425848349",
        "name": "Security"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/7a16cda39bd7000023ac71a02c6c093e775713af/medium.jpg?1514355675",
        "name": "gcp"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/8d908a5594e62483e1b32e51e6338335f2365ed7/medium.jpg?1554535430",
        "name": "Windows10"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/3a721a3f0c87ad07749c5f659b0365ea548f8def/medium.jpg?1516532296",
        "name": "R"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/3bf1af60bf3b03281e9e228d68bf9e2697028272/medium.jpg?1552563770",
        "name": "Vagrant"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/93b434ab12f17f0361be4c236679a76f797162dc/medium.jpg?1387912199",
        "name": "ShellScript"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/63d1f0212d6c525e77d58ef8401b9f415d7a4448/medium.jpg?1547787899",
        "name": "Slack"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/b34bd21e0b7e775f5987cea4c02b936dc95175a5/medium.jpg?1513505818",
        "name": "Arduino"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/2196b2d18f91fc9f3fc7d8d852e8c8ebce66364b/medium.jpg?1409140301",
        "name": "API"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/ab07ff49f641ecdc5d3b03eab7613a8e95cea1ec/medium.jpg?1679884998",
        "name": "Salesforce"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/b63534ba3529c37ec6df1975882cea610b063452/medium.jpg?1387914668",
        "name": "nginx"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/94f9cf4c814c5458fb106a047ea53c553c86fa4a/medium.jpg?1603675363",
        "name": "GoogleAppsScript"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/50b604e5c61c4c22ee1b38c2d5a5cbf419569014/medium.jpg?1579430246",
        "name": "Nuxt"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/9a7e96bf051980ee623096f070b71bb3b21f8704/medium.jpg?1389670184",
        "name": "Objective-C"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/73f9d6b47a3d1b827c10e3544c0a78e91aa00cbf/medium.jpg?1513496044",
        "name": "TensorFlow"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/8e2307343d25431c046aa452a4c0b0e3b6dc9f82/medium.jpg?1497794914",
        "name": "SpringBoot"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/a28c9ce47ee8c1427846c66cc34b48e44f087c5a/medium.jpg?1514023966",
        "name": "Rust"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/c64f97843cf90440b309712a6de3845de462ebdb/medium.jpg?1568603229",
        "name": "新人プログラマ応援"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/84bb96bdaa00297e35e9a0628f40c65d656a22e9/medium.jpg?1576050586",
        "name": "PowerShell"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/de509c507a857a51002b44107a96a2c89452c4c3/medium.jpg?1422923033",
        "name": "IoT"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/4c563803b82adb09e5887c1d2d56df973f2a1f78/medium.jpg?1512579697",
        "name": "初心者向け"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/b5cadc3eff868b31ec9023e1643a94c66870e60a/medium.jpg?1387904189",
        "name": "SSH"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/6e0b49c8d70cd06c57386d923a8362fbaf71c233/medium.jpg?1364840830",
        "name": "Elixir"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/f44f6d92a392528897fc77bb307953834c0e35ab/medium.jpg?1513503023",
        "name": "OpenCV"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/1d1195446ff88d287ef2c16d470cb6494fe021be/medium.jpg?1511317559",
        "name": "競技プログラミング"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/947e2e83c7248231ef3224d56e4ca3160a5b5368/medium.jpg?1387915060",
        "name": "HTML5"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/ee43bb03cc0f746ab7472ded75551fb6df44f3e1/medium.jpg?1501232794",
        "name": "#migrated"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/4f5eaa59176b5b6085d37ca3eba3360bf27070c2/medium.jpg?1504169052",
        "name": "Angular"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/308484554898eb25789a392a2260387d71557e63/medium.jpg?1501238161",
        "name": "AI"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/45ac0061ade9d0fe40c20b787b0db6ddb37e264d/medium.jpg?1628497878",
        "name": "S3"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/1bcb7d3aa550b0852299d6d53e7a820b8b722fa2/medium.jpg?1629076178",
        "name": "oracle"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/b85c97772bddbfbb48a8b116669349c7ec92e4bf/medium.jpg?1395227038",
        "name": "MachineLearning"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/02fe111fd1c87a9c3ff0106b4fbfd319506dec56/medium.jpg?1604788871",
        "name": "AndroidStudio"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/d0294d434efcdcb36f6d1d967748b1b5157d6287/medium.jpg?1453625254",
        "name": "centos7"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/dc88b232098c780491d677e4a208fb4a657470af/medium.jpg?1568269339",
        "name": "Scala"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/c01990c29ce345a67f3b5e85102dfd84276b8e95/medium.jpg?1387911385",
        "name": "JSON"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/9ae0422c08f79f8f13c871c09c58e432d5010ba8/medium.jpg?1513496177",
        "name": "Apache"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/17baea68bab4b11e0fe6c47d8a5fdb997c111452/medium.jpg?1584543157",
        "name": "pandas"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/564a959421752b1a11f309d91296db441e211cba/medium.jpg?1538922878",
        "name": "Chrome"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/f9e16bdf556f728212e70e6308b14ad5cbe70880/medium.jpg?1569219899",
        "name": "プログラミング"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/0d48b8110fb8c802d9d179a9fb21844c0e49deb4/medium.jpg?1514925624",
        "name": "Ansible"
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/c12d9d0fc654311c657b45784a598331e39ebaf6/medium.jpg?1598801339",
        "name": "VBA"
    }
]


