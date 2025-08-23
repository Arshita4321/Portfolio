import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkInfoComponent } from '../work-info/work-info.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private dialog: MatDialog) {}

  openPopup(companyId: any): void {
    const dialogWidth = window.innerWidth > 768 ? '800px' : '90%';
    this.dialog.open(WorkInfoComponent, {
      width: '80%',
      maxWidth: '1200px',
      data: companyId
    });
  }

  aboutme: string = `I’m an enthusiastic Laravel developer with experience, 
                      keen to leverage my robust knowledge in Laravel and related technologies 
                      to significantly contribute to the company’s success while continuously 
                      expanding my expertise. I enjoy creating solutions from scratch, exploring 
                      how things work, and am driven by curiosity to solve complex challenges.`;

  education: Array<any> = [
    {
      studied_at: "Lovely Professional University",
      qualified: "B.Tech.",
      time_period: "2023 - Present",
      place: "Punjab",
    },
    {
      studied_at: "New Era",
      qualified: "Plus Two Computer Science",
      time_period: "2021 - 2022",
      place: "Hamirpur, Himachal Pradesh",
    },
    {
      studied_at: "New Era",
      qualified: "10th",
      time_period: "2019 - 2020",
      place: "Hamirpur, Himachal Pradesh",
    }
  ];

  // Social Work Data (update ngo_website if you have a different URL)
  socialWork: Array<any> = [
    {
      ngo_name: "Prayas Society",
      ngo_website: "http://paryassociety.com/",
      role: "Volunteer – Health & Education Programs",
      time_period: "Jan 2024 – Mar 2024",
      description: [
        "Health: Supported community health awareness and basic wellness sessions.",
        "Student Education: Taught foundational subjects & computer basics to underprivileged children."
      ],
      certificate: "assets/img/ngo-certificate.png"
    }
  ];
}
