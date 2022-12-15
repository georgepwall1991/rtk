export interface Branch {
    Branch1: number;
    CommitTreeId: string;
    CommitCommitId: string;
    CommitAuthorName: string;
    CommitAuthorEmail: string;
    CommitAuthorDate: string;
    CommitCommitterName: string;
    CommitCommitterEmail: string;
    CommitCommitterDate: string;
    CommitComment: string;
    CommitParents0: string;
    CommitUrl: string;
    Name: string;
    AheadCount: number;
    BehindCount: number;
    IsBaseVersion: boolean;
    ProjectId: string | null;
    RepositoryId: string | null;
}