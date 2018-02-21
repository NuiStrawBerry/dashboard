// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared.module';

import {ActionbarComponent} from './actionbar/component';
import {AllocationChartComponent} from './allocationchart/component';
import {BreadcrumbsComponent} from './breadcrumbs/component';
import {CardComponent} from './card/component';
import {ChipsComponent} from './chips/component';
import {ObjectMetaComponent} from './objectmeta/component';
import {PropertyComponent} from './property/component';
import {ProxyComponent} from './proxy/component';
import {ClusterRoleListComponent} from './resourcelist/clusterrole/component';
import {ConfigMapListComponent} from './resourcelist/configmap/component';
import {CronJobListComponent} from './resourcelist/cronjob/component';
import {DaemonSetListComponent} from './resourcelist/daemonset/component';
import {DeploymentListComponent} from './resourcelist/deployment/component';
import {CardListFilterComponent} from './resourcelist/filter/component';
import {JobListComponent} from './resourcelist/job/component';
import {NamespaceListComponent} from './resourcelist/namespace/component';
import {NodeListComponent} from './resourcelist/node/component';
import {PersistentVolumeListComponent} from './resourcelist/persistentvolume/component';
import {PersistentVolumeClaimListComponent} from './resourcelist/persistentvolumeclaim/component';
import {PodListComponent} from './resourcelist/pod/component';
import {ReplicaSetListComponent} from './resourcelist/replicaset/component';
import {ReplicationControllerListComponent} from './resourcelist/replicationcontroller/component';
import {SecretListComponent} from './resourcelist/secret/component';
import {LoadingSpinner} from './resourcelist/spinner/component';
import {StatefulSetListComponent} from './resourcelist/statefulset/component';
import {StorageClassListComponent} from './resourcelist/storageclass/component';
import {ListZeroState} from './resourcelist/zerostate/component';
import {ZeroState} from './zerostate/component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    AllocationChartComponent,
    CardComponent,
    ActionbarComponent,
    BreadcrumbsComponent,
    PropertyComponent,
    ObjectMetaComponent,
    ChipsComponent,
    LoadingSpinner,
    CardListFilterComponent,
    ProxyComponent,
    PodListComponent,
    NodeListComponent,
    ReplicaSetListComponent,
    NamespaceListComponent,
    PersistentVolumeListComponent,
    ListZeroState,
    ZeroState,
    ClusterRoleListComponent,
    StorageClassListComponent,
    CronJobListComponent,
    DaemonSetListComponent,
    DeploymentListComponent,
    JobListComponent,
    ReplicationControllerListComponent,
    StatefulSetListComponent,
    ConfigMapListComponent,
    SecretListComponent,
    PersistentVolumeClaimListComponent,
  ],
  exports: [
    AllocationChartComponent,
    CardComponent,
    ActionbarComponent,
    BreadcrumbsComponent,
    PropertyComponent,
    ObjectMetaComponent,
    ChipsComponent,
    LoadingSpinner,
    CardListFilterComponent,
    ProxyComponent,
    PodListComponent,
    NodeListComponent,
    ReplicaSetListComponent,
    NamespaceListComponent,
    PersistentVolumeListComponent,
    ZeroState,
    ClusterRoleListComponent,
    StorageClassListComponent,
    CronJobListComponent,
    DaemonSetListComponent,
    DeploymentListComponent,
    JobListComponent,
    ReplicationControllerListComponent,
    StatefulSetListComponent,
    ConfigMapListComponent,
    SecretListComponent,
    PersistentVolumeClaimListComponent,
  ],
})
export class ComponentsModule {}
