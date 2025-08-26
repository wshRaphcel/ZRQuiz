const virtualharddiskQuizData = [
  // Multiple Choice (1 - 40)
  {
    question: "What is a Virtual Hard Disk (VHD)?",
    options: [
      "A physical hard drive",
      "A file that emulates a physical disk",
      "A cloud storage service",
      "A backup of an entire system"
    ],
    answer: 1,
  },
  {
    question: "Which Microsoft format supports up to 64 TB for virtual disks?",
    options: [".vhd", ".vhdx", ".iso", ".img"],
    answer: 1,
  },
  {
    question: "What is the main advantage of VHDX over VHD?",
    options: [
      "Smaller file size",
      "Larger storage capacity and resilience to corruption",
      "Faster physical disk speed",
      "Automatic cloud synchronization"
    ],
    answer: 1,
  },
  {
    question: "Which type of VHD dynamically expands as data is added?",
    options: ["Fixed", "Differencing", "Dynamically expanding", "Pass-through"],
    answer: 2,
  },
  {
    question: "What does a differencing disk do?",
    options: [
      "Stores changes relative to a parent disk",
      "Expands to maximum size immediately",
      "Directly maps to physical hardware",
      "Compresses data automatically"
    ],
    answer: 0,
  },
  {
    question: "Which feature allows a VM to use a physical disk directly?",
    options: ["Dynamically expanding VHD", "Differencing VHD", "Pass-through disk", "Checkpoint disk"],
    answer: 2,
  },
  {
    question: "What is a common use of VHDs in testing environments?",
    options: [
      "Store media files",
      "Create isolated virtual machines without affecting host",
      "Install physical OS upgrades",
      "Enable network boot for physical PCs"
    ],
    answer: 1,
  },
  {
    question: "Which Windows feature enables creating and mounting VHDs?",
    options: ["Disk Management", "Hyper-V Manager", "File Explorer", "Control Panel"],
    answer: 0,
  },
  {
    question: "What command-line tool can create a new VHD or VHDX?",
    options: ["diskpart", "chkdsk", "bcdedit", "format"],
    answer: 0,
  },
  {
    question: "What is the maximum size of a VHD file?",
    options: ["2 TB", "4 TB", "64 TB", "128 TB"],
    answer: 0,
  },
  {
    question: "Which scenario is ideal for using differencing disks?",
    options: [
      "Creating incremental backups of a parent VM",
      "Running VMs without snapshots",
      "Storing large media files",
      "Direct mapping to physical storage"
    ],
    answer: 0,
  },
  {
    question: "Which type of VHD is fastest for read/write performance?",
    options: ["Fixed", "Dynamically expanding", "Differencing", "Encrypted"],
    answer: 0,
  },
  {
    question: "What is the role of checkpoints with VHDs in Hyper-V?",
    options: [
      "Store VM state and disk changes",
      "Encrypt the VHD file",
      "Increase disk performance",
      "Automatically compress disk data"
    ],
    answer: 0,
  },
  {
    question: "Which of the following allows VHDs to be used in Azure?",
    options: [
      "VHD format only",
      "VHDX format only",
      "Both VHD and VHDX",
      "Only differencing disks"
    ],
    answer: 0,
  },
  {
    question: "Which integration feature ensures VHD consistency during backups?",
    options: ["Hyper-V Integration Services", "VM snapshots", "Dynamic Memory", "Pass-through disks"],
    answer: 0,
  },
  {
    question: "Which Windows tool can attach a VHD as a drive letter?",
    options: ["Disk Management", "PowerShell", "File Explorer", "Task Manager"],
    answer: 0,
  },
  {
    question: "Which type of VHD would you use for testing multiple OS configurations?",
    options: ["Fixed", "Dynamically expanding", "Differencing", "Pass-through"],
    answer: 2,
  },
  {
    question: "Which scenario benefits from a fixed-size VHD?",
    options: [
      "Consistent disk performance",
      "Saving host disk space",
      "Multiple child VMs sharing one disk",
      "Frequent snapshots"
    ],
    answer: 0,
  },
  {
    question: "Which VHD type allows multiple VMs to share a base image safely?",
    options: ["Fixed VHD", "Differencing VHD", "Dynamically expanding VHD", "Pass-through disk"],
    answer: 1,
  },
  {
    question: "What is the recommended VHD format for production servers on Hyper-V 2016+?",
    options: [".vhd", ".vhdx", ".iso", ".img"],
    answer: 1,
  },
  {
    question: "Which feature prevents data corruption during unexpected power loss with VHDX?",
    options: ["Checksum", "Compression", "Encryption", "Snapshot"],
    answer: 0,
  },
  {
    question: "Which cmdlet creates a new VHDX in PowerShell?",
    options: ["New-VHD", "New-VM", "Add-VMHardDisk", "Format-VHD"],
    answer: 0,
  },
  {
    question: "Which property allows resizing a VHD dynamically?",
    options: ["Fixed size", "Differencing parent", "Expand-VHD", "Merge-VHD"],
    answer: 2,
  },
  {
    question: "What is the purpose of merging differencing disks?",
    options: [
      "Combine changes into the parent disk",
      "Convert to fixed disk",
      "Compress data",
      "Move VHD to another host"
    ],
    answer: 0,
  },
  {
    question: "Which VHD feature supports trimming unused blocks to improve performance?",
    options: ["Fixed VHD", "Dynamically expanding VHDX", "Differencing VHD", "Pass-through disk"],
    answer: 1,
  },
  {
    question: "Which Hyper-V version introduced the VHDX format?",
    options: ["Windows Server 2008", "Windows Server 2012", "Windows Server 2016", "Windows Server 2019"],
    answer: 1,
  },
  {
    question: "What is the main advantage of attaching a VHD directly to the host?",
    options: [
      "Faster performance with pass-through disks",
      "Automatic snapshots",
      "Encryption enabled",
      "Supports dynamic resizing"
    ],
    answer: 0,
  },
  {
    question: "Which scenario requires differencing disks?",
    options: [
      "Child VMs based on a parent OS image",
      "Backup of a fixed-size VHD",
      "Temporary storage for large files",
      "Cloud sync"
    ],
    answer: 0,
  },
  {
    question: "Which format allows VHD conversion to Azure-compatible disks?",
    options: [".vhd", ".vhdx", ".iso", ".img"],
    answer: 0,
  },
  {
    question: "What is the purpose of a parent disk in differencing VHDs?",
    options: [
      "Contains the base OS or data for child disks",
      "Acts as a backup",
      "Provides encryption",
      "Stores snapshots"
    ],
    answer: 0,
  },
  {
    question: "Which feature improves VHDX resilience to file system corruption?",
    options: ["4 KB logical sector alignment", "Fixed size only", "Dynamic expansion", "Pass-through disks"],
    answer: 0,
  },
  {
    question: "Which cmdlet lists VHD information in PowerShell?",
    options: ["Get-VHD", "Get-VM", "Get-Disk", "Get-ChildItem"],
    answer: 0,
  },
  {
    question: "Which tool verifies VHD integrity on Windows?",
    options: ["CHKDSK", "DISM", "SFC", "PowerShell Get-VHD"],
    answer: 0,
  },
  {
    question: "What type of disk is recommended for frequent snapshots?",
    options: ["Fixed", "Dynamically expanding", "Differencing", "Pass-through"],
    answer: 2,
  },
  {
    question: "Which scenario is best suited for pass-through disks?",
    options: [
      "High-performance workloads requiring direct hardware access",
      "Child VMs",
      "Temporary testing",
      "Dynamic expansion"
    ],
    answer: 0,
  },
  {
    question: "Which Hyper-V feature can merge changes from a differencing disk back to the parent?",
    options: ["Merge-VHD", "Convert-VHD", "Resize-VHD", "New-VHD"],
    answer: 0,
  },

  // True/False (41 - 60)
  {
    question: "VHDX files can support up to 64 TB of storage.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Differencing disks store changes relative to a parent disk.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Pass-through disks bypass the VHD file and access physical storage directly.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Dynamically expanding VHDs use more host disk space initially.",
    options: ["True", "False"],
    answer: 1,
  },
  {
    question: "Fixed VHDs allocate full disk size immediately.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Checkpoints can use differencing disks to save VM state.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Parent disks cannot be modified while child differencing disks exist.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Merging differencing disks combines changes into the parent disk.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "VHDX uses a log-based architecture to improve resilience.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Fixed VHDs are faster than dynamically expanding VHDs in all cases.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "VHDs can be attached to the host without using Hyper-V.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Pass-through disks offer higher performance than VHDX files.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Differencing disks are suitable for testing multiple VM configurations.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Dynamic VHDs shrink automatically when data is deleted.",
    options: ["True", "False"],
    answer: 1,
  },
  {
    question: "VHDX supports 4 KB logical sector alignment for performance.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "PowerShell can create, resize, and merge VHDs.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "VHDX is more resilient to corruption than VHD.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Checkpoints create differencing disks automatically.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Merging differencing disks can be performed via PowerShell.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Pass-through disks require exclusive access to the physical disk.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Fixed disks cannot be expanded once created.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question: "Dynamically expanding disks can be resized using Hyper-V tools.",
    options: ["True", "False"],
    answer: 0,
  }
];