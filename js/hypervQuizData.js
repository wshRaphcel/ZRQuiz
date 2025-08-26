const hypervQuizData = [
  // Multiple Choice (1 - 40)
  {
    question: "What is virtualization?",
    options: [
      "The use of multiple CPUs in one system",
      "Running multiple OSes on one hardware platform",
      "Dividing a CPU into cores",
      "Storing data across multiple disks"
    ],
    answer: 1,
  },
  {
    question: "Which Microsoft technology enables virtualization on Windows?",
    options: ["VMware ESXi", "KVM", "Hyper-V", "VirtualBox"],
    answer: 2,
  },
  {
    question: "What is the role of a hypervisor?",
    options: [
      "Provides device drivers",
      "Runs applications in the cloud",
      "Manages and isolates virtual machines",
      "Stores backup data"
    ],
    answer: 2,
  },
  {
    question: "Which type of hypervisor runs directly on hardware?",
    options: ["Type 2", "Type 1", "Kernel Module", "Cloud-based"],
    answer: 1,
  },
  {
    question: "What is the root partition in Hyper-V?",
    options: [
      "A guest OS with limited privileges",
      "The primary partition with direct hardware access",
      "A memory allocation unit",
      "A storage drive format"
    ],
    answer: 1,
  },
  {
    question: "What interface allows child partitions to communicate with the hypervisor?",
    options: ["API Call", "Hypercall", "IOMMU", "WMI"],
    answer: 1,
  },
  {
    question: "The Virtualization Infrastructure Driver (VID) manages:",
    options: [
      "File backups",
      "Physical disks only",
      "Memory, CPU, and I/O for partitions",
      "Security policies"
    ],
    answer: 2,
  },
  {
    question: "Which component provides inter-partition communication in Hyper-V?",
    options: ["WinHv", "VMBus", "VMMS", "APIC"],
    answer: 1,
  },
  {
    question: "Which runs in the parent partition to handle synthetic devices?",
    options: ["VSP", "VSC", "VMWP", "VMkernel"],
    answer: 0,
  },
  {
    question: "Which of these is a benefit of enlightened child partitions?",
    options: [
      "Higher CPU overhead",
      "Direct VMBus communication",
      "Legacy device emulation",
      "No need for integration services"
    ],
    answer: 1,
  },
  {
    question: "Which hypervisor architecture does VMware ESXi use?",
    options: [
      "Microkernel with Root Partition",
      "Monolithic Hypervisor with VMkernel",
      "Linux Kernel Module with QEMU",
      "Hybrid Hypervisor"
    ],
    answer: 1,
  },
  {
    question: "Which file format allows up to 64 TB for virtual disks in Hyper-V?",
    options: [".vhd", ".vhdx", ".vhds", ".img"],
    answer: 1,
  },
  {
    question: "What Hyper-V feature encrypts virtual machines?",
    options: [
      "Virtual Trusted Platform Module",
      "Shielded Virtual Machines",
      "Secure Boot",
      "BitLocker Integration"
    ],
    answer: 1,
  },
  {
    question: "Which feature in Hyper-V supports checkpoints?",
    options: ["Snapshots", "Checkpoints", "Restore Points", "VM Logs"],
    answer: 1,
  },
  {
    question: "What is the main advantage of Generation 2 VMs in Hyper-V?",
    options: [
      "BIOS booting",
      "Support for UEFI and Secure Boot",
      "Compatibility with 32-bit OS",
      "Use of legacy network adapters"
    ],
    answer: 1,
  },
  {
    question: "Which Windows Server version introduced Shielded VMs?",
    options: [
      "Windows Server 2008",
      "Windows Server 2012 R2",
      "Windows Server 2016",
      "Windows Server 2019"
    ],
    answer: 2,
  },
  {
    question: "Which Hyper-V network switch type allows only VM-to-VM communication on the host?",
    options: ["External", "Internal", "Private", "VLAN"],
    answer: 2,
  },
  {
    question: "What is required to install Hyper-V on Windows Server 2016?",
    options: [
      "2 GB RAM and BIOS virtualization",
      "4 GB RAM and hardware-assisted virtualization",
      "UEFI with Secure Boot only",
      "A minimum of 2 CPUs"
    ],
    answer: 1,
  },
  {
    question: "Which technology improves VM memory management efficiency?",
    options: ["SLAT", "DEP", "NUMA", "IOMMU"],
    answer: 0,
  },
  {
    question: "What does DEP help prevent?",
    options: [
      "Excessive CPU usage",
      "Buffer overflow attacks",
      "Disk fragmentation",
      "Network congestion"
    ],
    answer: 1,
  },
  {
    question: "Which Hyper-V component manages all VM states?",
    options: [
      "VMkernel",
      "Virtual Machine Management Service (VMMS)",
      "Virtual Machine Worker Process (VMWP)",
      "WinHv"
    ],
    answer: 1,
  },
  {
    question: "What does SR-IOV stand for?",
    options: [
      "Shared Resource I/O Virtualization",
      "Single Root I/O Virtualization",
      "Secure Remote I/O Virtualization",
      "System Resource Input/Output Virtualization"
    ],
    answer: 1,
  },
  {
    question: "Which cmdlet creates a new virtual hard disk?",
    options: ["New-VM", "New-VHD", "Add-VMHardDisk", "Create-VHD"],
    answer: 1,
  },
  {
    question: "Which Hyper-V disk type grows as needed?",
    options: [
      "Fixed-size",
      "Pass-through",
      "Differencing",
      "Dynamically expanding"
    ],
    answer: 3,
  },
  {
    question: "Which feature allows Hyper-V VMs to be moved to Azure?",
    options: [
      "Azure Site Recovery",
      "Hyper-V Manager",
      "Checkpoint Migration",
      "Direct Storage Copy"
    ],
    answer: 0,
  },
  {
    question: "Which Hyper-V storage resiliency feature pauses VMs instead of shutting them down?",
    options: [
      "Critical Paused State",
      "Live Migration",
      "Hot Add Memory",
      "SMB 3.0 Storage QoS"
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of NIC Teaming in Hyper-V?",
    options: [
      "To increase VM disk size",
      "To provide network redundancy",
      "To reduce CPU usage",
      "To enable nested virtualization"
    ],
    answer: 1,
  },
  {
    question: "Which feature introduced in Server 2016 allows a VM to act as a Hyper-V host?",
    options: [
      "Shielded VMs",
      "Nested Virtualization",
      "Hypercall Extensions",
      "Dynamic Memory"
    ],
    answer: 1,
  },
  {
    question: "Which Hyper-V virtual switch type allows VM-to-host communication?",
    options: ["External", "Internal", "Private", "Hybrid"],
    answer: 1,
  },
  {
    question: "Which format is required when importing Hyper-V VMs into Azure?",
    options: [".vhd", ".vhdx", ".vhds", ".iso"],
    answer: 0,
  },
  {
    question: "Which Hyper-V integration feature enables time synchronization?",
    options: [
      "VMBus",
      "Integration Services",
      "WinHv",
      "Checkpoint Service"
    ],
    answer: 1,
  },
  {
    question: "Which Hyper-V feature introduced port mirroring?",
    options: [
      "Server 2008",
      "Server 2012",
      "Server 2016",
      "Server 2019"
    ],
    answer: 1,
  },
  {
    question: "Which VMware ESXi process handles VM lifecycle management?",
    options: ["VMkernel", "VMX", "VMM", "VMtools"],
    answer: 1,
  },
  {
    question: "Which feature in Hyper-V supports Secure Boot?",
    options: [
      "Generation 1 VMs",
      "Generation 2 VMs",
      "Legacy Adapters",
      "Nested Virtualization"
    ],
    answer: 1,
  },
  {
    question: "Which Windows Server feature enables Fibre Channel access for VMs?",
    options: [
      "Virtual Fibre Channel",
      "iSCSI Pass-through",
      "Direct Storage Access",
      "WinHv"
    ],
    answer: 0,
  },
  {
    question: "Which technology allows multiple tenants to use the same physical network securely?",
    options: [
      "VLANs",
      "NIC Teaming",
      "Network Virtualization",
      "IPsec Offloading"
    ],
    answer: 2,
  },
  {
    question: "Which PowerShell cmdlet exposes virtualization extensions for nested VMs?",
    options: [
      "Enable-Virtualization",
      "Set-VMProcessor",
      "New-VirtualHost",
      "Add-HyperVNested"
    ],
    answer: 1,
  },
  {
    question: "Which Hyper-V component enforces isolation between VMs?",
    options: ["VMMS", "VID", "WinHv", "VMBus"],
    answer: 1,
  },
  {
    question: "Which disk type records changes from a parent disk?",
    options: ["Differencing Disk", "Pass-through", "Dynamic", "Fixed"],
    answer: 0,
  },

  // True/False (41 - 60)
  {
    question: "Hyper-V is a microkernel hypervisor.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Child partitions have direct access to physical CPU and memory.",
    options: ["True", "False"],
    answer: 1,
  },
  {
    question: "The root partition manages device drivers and power management.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "VMBus supports synthetic device communication.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "VMware ESXi uses VMBus for communication.",
    options: ["True", "False"],
    answer: 1,
  },
  {
    question: "Enlightened child partitions require Hyper-V Integration Services.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "SLAT improves memory management efficiency in virtual environments.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "DEP prevents execution of code in memory regions meant for data only.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Hyper-V requires hardware-assisted virtualization enabled in BIOS/UEFI.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Generation 2 VMs in Hyper-V support UEFI and Secure Boot.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Azure natively supports Generation 2 Hyper-V virtual machines.",
    options: ["True", "False"],
    answer: 1,
  },
  {
    question: "Differencing disks perform better than fixed-size disks in all cases.",
    options: ["True", "False"],
    answer: 1,
  },
  {
    question: "Nested virtualization requires at least 4 GB of RAM.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "VLANs are easier to configure than Hyper-V network virtualization.",
    options: ["True", "False"],
    answer: 1,
  },
  {
    question: "Hyper-V virtual switches can be External, Internal, or Private.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Storage QoS can be applied to multiple virtual hard disks at once.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Hyper-V Replica supports extended replication.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "NIC Teaming improves both performance and redundancy.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Live migration allows moving a VM between hosts with zero downtime.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "VMWP is a kernel-mode component in Hyper-V.",
    options: ["True", "False"],
    answer: 1,
  }
];
