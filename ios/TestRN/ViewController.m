//
//  ViewController.m
//  TestRN
//
//  Created by chenyk on 16/8/1.
//  Copyright © 2016年 58daojia. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}
- (IBAction)action:(id)sender {
    
//    NSURL *jsCodeLocation;
//    jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
//    //jsCodeLocation = [NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"listview.txt" ofType:nil]];
//    
//    RCTRootView *rootView =
//    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
//                         moduleName        : @"TestRN"
//                         initialProperties :nil launchOptions: nil];
//    UIViewController *vc = [[UIViewController alloc] init];
//    vc.view = rootView;
////    [self.navigationController setNavigationBarHidden:YES animated:YES];
//    [self.navigationController pushViewController:vc animated:YES];
}
- (void)viewDidAppear:(BOOL)animated
{
    [super viewDidAppear:animated];
//    [self.navigationController setNavigationBarHidden:NO animated:YES];

}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
