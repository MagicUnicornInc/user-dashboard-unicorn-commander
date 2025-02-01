import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  Users,
  Code,
  Terminal,
  Image,
  MessageCircle,
  Command,
  ExternalLink,
  Sparkles,
  Zap,
  Brain,
  Database
} from 'lucide-react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [navigatorQuery, setNavigatorQuery] = useState('');

  const gradientClasses = [
    "from-blue-500/20 to-purple-500/20", // Cyberpunk blue-purple
    "from-pink-500/20 to-rose-500/20",   // Neon pink
    "from-emerald-500/20 to-teal-500/20", // Matrix green
    "from-orange-500/20 to-amber-500/20"  // Sunset orange
  ];

  const coreApps = [
    {
      id: 'whimsical-workspace',
      icon: <BookOpen className="w-6 h-6" />,
      title: "Whimsical Workspace",
      description: "Collaborative AI Knowledge Hub",
      url: "https://whimsicalworkspace.unicorncommander.ai",
      status: 'active',
      highlight: "Most Used"
    },
    {
      id: 'unicorn-squad',
      icon: <Users className="w-6 h-6" />,
      title: "Unicorn Squad Room",
      description: "Multi-Agent AI Chat Hub",
      url: "https://unicornsquadroom.unicorncommander.ai",
      status: 'active',
      highlight: "Team Favorite"
    },
    {
      id: 'center-deep',
      icon: <Search className="w-6 h-6" />,
      title: "Center Deep",
      description: "Vector Search & Retrieval",
      url: "https://centerdeep.unicorncommander.ai",
      status: 'active',
      highlight: "AI-Powered"
    },
    {
      id: 'magicode',
      icon: <Code className="w-6 h-6" />,
      title: "MagiCode",
      description: "AI-Powered Coding Assistant",
      url: "https://magicode.unicorncommander.ai",
      status: 'active',
      highlight: "Developer Pick"
    }
  ];

  const upcomingApps = [
    {
      id: 'root-command',
      icon: <Terminal className="w-6 h-6" />,
      title: "Computer Root Command",
      description: "Terminal Access with AI Enhancement",
      status: 'coming-soon'
    },
    {
      id: 'minds-eye',
      icon: <Image className="w-6 h-6" />,
      title: "Mind's Eye",
      description: "AI Visual Content Creation",
      status: 'coming-soon'
    },
    {
      id: 'unicorn-council',
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Unicorn Council",
      description: "Multi-Agent AI Meeting Space",
      status: 'coming-soon'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `https://centerdeep.unicorncommander.ai/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleNavigator = (e) => {
    e.preventDefault();
    console.log('Navigator query:', navigatorQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-10 h-10 text-pink-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Unicorn Commander
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            Ready for action, Commander? Your AI squad awaits orders.
          </p>
        </header>

        {/* Dual Search Interface */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* CenterDeep Search */}
          <form onSubmit={handleSearch} className="space-y-2">
            <label className="block text-sm font-medium text-purple-200">
              Magical Knowledge Search
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-purple-300" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Seek wisdom..."
                className="w-full pl-10 pr-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-200"
                autoFocus
              />
            </div>
          </form>

          {/* Navigator Agent */}
          <form onSubmit={handleNavigator} className="space-y-2">
            <label className="block text-sm font-medium text-purple-200">
              AI Navigator
            </label>
            <div className="relative">
              <Command className="absolute left-3 top-3 w-5 h-5 text-purple-300" />
              <input
                type="text"
                value={navigatorQuery}
                onChange={(e) => setNavigatorQuery(e.target.value)}
                placeholder="Let our AI guide you..."
                className="w-full pl-10 pr-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-200"
              />
            </div>
          </form>
        </div>

        {/* Core Apps */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-pink-400" />
            <span>Magical Tools</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {coreApps.map((app, index) => (
              <a
                key={app.id}
                href={app.url}
                className={`group relative bg-gradient-to-br ${gradientClasses[index]} backdrop-blur-md rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center p-4 aspect-square hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-0.5`}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="p-3 bg-white/10 rounded-xl mb-3 backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all duration-300">
                    {app.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{app.title}</h3>
                  <p className="text-xs text-white/80">{app.description}</p>
                  {app.highlight && (
                    <span className="mt-2 inline-block px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs border border-white/10">
                      {app.highlight}
                    </span>
                  )}
                </div>
                <ExternalLink className="absolute bottom-2 right-2 w-4 h-4 text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Upcoming Apps */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Brain className="w-6 h-6 mr-2 text-pink-400" />
            <span>Future Enchantments</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {upcomingApps.map((app, index) => (
              <div
                key={app.id}
                className={`relative bg-gradient-to-br ${gradientClasses[index]} backdrop-blur-md rounded-xl border border-white/10 flex flex-col items-center justify-center p-4 aspect-square`}
              >
                <div className="p-3 bg-white/10 rounded-xl mb-3 backdrop-blur-md border border-white/10">
                  {app.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{app.title}</h3>
                <p className="text-xs text-white/80 text-center">{app.description}</p>
                <span className="mt-2 inline-block px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs border border-white/10">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Hub Preview */}
        <div className="group cursor-pointer bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
              <Database className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white">Enterprise Magic Hub</h2>
          </div>
          <p className="text-white/80 text-sm mb-2">
            Harness the power of Unicorn Commander within your own realm. Perfect for businesses seeking complete control over their magical operations.
          </p>
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm border border-white/10">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
